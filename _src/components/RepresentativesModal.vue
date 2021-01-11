<template>
  <div>
    <vue-final-modal v-model="showModal"
                     classes="modal-container"
                     content-class="modal-content"
                     focus-trap
                     @opened="focusInput"
                     name="representatives-modal"
                     @closed="reset">
      <h1 class="modal--header">{{ $t('reps.modalHeader') }}</h1>
      <button class="modal__close" @click="showModal = false">
        <i class="fas fa-times"></i>
      </button>
      <form @submit.prevent="searchReps" v-if="shouldShowLookupForm">
        <p v-html="$t('reps.form.inputInstructions')"></p>
        <div class="row">
          <div class="form-group col-md-6">
            <label
                for="rep--submitter-postal">{{ $t('reps.form.submitterPostal') }}</label>
            <input type="text"
                   v-model="postal"
                   ref="postalInput"
                   id="rep--submitter-postal"
                   placeholder="K1A 0A6"
                   @input="postal=$event.target.value.toUpperCase()">
          </div>
          <div class="form-group col-md-6">
            <label for="rep--submitter-name">{{ $t('reps.form.submitterName') }}</label>
            <input type="text" id="rep--submitter-name" v-model="submitterName">
          </div>
        </div>
        <div class="validation-error" v-if="formError.length > 0">
          {{ formError }}
        </div>
        <button type="submit" class="btn btn--block btn--blue">{{
            $t('reps.form.submit')
          }}
        </button>
      </form>
      <template v-else-if="shouldShowReps">

        <p v-if="formError.length > 0" class="validation-error" v-html="formError"></p>
        <p v-else v-html="$t('reps.form.foundRepsInstructions', {postal})"></p>

        <div id="representatives">
          <div v-for="rep in representatives" class="representative">
            <div class="rep--content">
              <div class="rep--image-wrap" :class="{'has-image': rep.photo_url !== ''}">
                <div class="rep--image" :style="repStyle(rep)"></div>
              </div>
              <h3>{{ rep.name }}</h3>
              <div class="rep--jurisdiction">
                {{ rep.elected_office }}, {{ rep.district_name }}<br>
                <em>{{ rep.party_name }}</em>
              </div>
            </div>
            <a :href="mailtoAddress(rep)"
               @click="attemptMailto(rep)"
               class="btn btn--blue btn--block"
               :disabled="mailtoTimeout !== null">
              {{ $t('reps.form.sendEmail') }}
            </a>
            <!--            <button @click="sendEmail" class="btn btn&#45;&#45;blue btn&#45;&#45;block">-->
            <!--              {{ $t('reps.form.sendEmail') }}-->
            <!--            </button>-->
          </div>
        </div>
        <button @click="reset" class="btn btn--default">
          {{ $t('reps.form.searchAgain') }}
        </button>
      </template>
      <template v-else>
        <form @submit.prevent="" id="email-representative">
          <p v-html="$t('reps.form.emailInstructions')"></p>
          <div class="form-group">
            <label for="rep--email-address">{{ $t('reps.form.repEmail') }}</label>
            <div class="field-wrap">
              <input type="email"
                     id="rep--email-address"
                     :value="formatEmail(selectedRep)"
                     ref="repEmailAddress"
                     readonly>
              <button class="btn btn--blue btn--copy"
                      @click.prevent="copyField('repEmailAddress', $event)"
                      :title="$t('reps.form.copy')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label for="rep--bcc-address">
              {{ $t('reps.form.bccAddress') }}
            </label>
            <small><em>{{ $t('reps.form.bccExplanation') }}</em></small>
            <div class="field-wrap">
              <input type="email"
                     id="rep--bcc-address"
                     :value="$t('reps.bccAddress')"
                     ref="bccAddress"
                     readonly>
              <button class="btn btn--blue btn--copy"
                      @click.prevent="copyField('bccAddress', $event)"
                      :title="$t('reps.form.copy')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label for="rep--email-title">{{ $t('reps.form.emailTitle') }}</label>
            <div class="field-wrap">
              <input type="email"
                     id="rep--email-title"
                     :value="$t('reps.emailTitle')"
                     ref="emailTitle"
                     readonly>
              <button class="btn btn--blue btn--copy"
                      @click.prevent="copyField('emailTitle', $event)"
                      :title="$t('reps.form.copy')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label for="rep--email-body">{{ $t('reps.form.emailBody') }}</label>
            <div class="field-wrap">
              <textarea id="rep--email-body"
                        ref="emailBody"
                        readonly
                        rows="6">{{ emailBody }}</textarea>
              <button class="btn btn--blue btn--copy"
                      @click.prevent="copyField('emailBody', $event)"
                      :title="$t('reps.form.copy')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
        </form>
        <button @click="reset" class="btn btn--default btn--block">
          {{ $t('reps.form.searchAgain') }}
        </button>

      </template>
    </vue-final-modal>
  </div>
</template>

<script>
import OpenNorth from "../OpenNorth";
import primeMinister from '../prime-minister.json';

export default {
  data: () => ({
    showModal: false,
    submitterName: '',
    postal: '',
    formError: '',
    representatives: [],
    selectedRep: null,
    mailtoTimeout: null,
    successfullySent: false,
  }),
  methods: {
    focusInput: function () {
      if (this.$refs.postalInput) {
        this.$refs.postalInput.focus();
      }
    },
    searchReps: async function (e) {
      this.formError = '';
      if (!this.postal.match(/[A-Z]\d[A-Z]\s?\d[A-Z]\d/)) {
        this.formError = this.$t('reps.form.error.invalidPostal');
        return;
      }

      if (this.submitterName.length < 3) {
        this.formError = this.$t('reps.form.error.nameRequired');
        return;
      }

      this.representatives = await OpenNorth.findRepsByPostal(this.postal);
      if (this.representatives.length === 0) {
        this.formError = this.$t('reps.form.error.notFound', {postal: this.postal});
        this.representatives = [primeMinister];
      }
    },
    repStyle: function (rep) {
      return {
        backgroundImage: rep.photo_url ? `url('${rep.photo_url}')` : none
      };
    },
    mailtoAddress: function (rep) {
      let email = encodeURI(this.formatEmail(rep));
      let bcc = encodeURIComponent(this.$t('reps.bccAddress'));
      let subject = encodeURIComponent(this.$t('reps.emailTitle'));
      let body = encodeURIComponent(this.$t('reps.emailBody', {
        ministerName: rep.name,
        submitterName: this.submitterName,
        submitterPostal: this.postal
      }));
      return `mailto:${email}?subject=${subject}&body=${body}&bcc=${bcc}`;
    },
    formatEmail: function (rep) {
      return `"${rep.name}"<${rep.email}>`;
    },
    attemptMailto: function (rep) {
      if (this.mailtoTimeout !== null) {
        return;
      }

      let blurHandler = () => {
        window.removeEventListener('blue', blurHandler, false);
        clearTimeout(this.mailtoTimeout);
        this.successfullySent = true;
      };

      window.addEventListener('blur', blurHandler, false);
      this.mailtoTimeout = setTimeout(() => {
        this.selectedRep = rep;
        clearTimeout(this.mailtoTimeout);
      }, 700);
    },
    reset: function () {
      this.submitterName = '';
      this.postal = '';
      this.representatives = [];
      this.formError = '';
      this.selectedRep = null;
      this.successfullySent = false;
    },
    copyField: function (field, e) {
      let elem = this.$refs[field];
      elem.select();
      document.execCommand('copy');
      let target = e.currentTarget;
      target.classList.add('copied');
      setTimeout(() => {
        target.classList.remove('copied');
      }, 1500);
    },
  },
  computed: {
    shouldShowLookupForm: function () {
      return this.representatives.length === 0
    },
    shouldShowReps: function () {
      return this.submitterName.length > 0
          && this.postal.length > 0
          && this.representatives.length > 0
          && this.selectedRep === null
    },
    shouldShowEmailFields: function () {
      return this.submitterName.length > 0
          && this.postal.length > 0
          && this.representatives.length > 0
          && this.selectedRep !== null
    },
    emailBody: function () {
      return this.$t('reps.emailBody', {
        ministerName: this.selectedRep.name,
        submitterName: this.submitterName,
        submitterPostal: this.postal
      })
    }
  }
}
</script>
