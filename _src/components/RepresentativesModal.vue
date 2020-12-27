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
      <p>{{ $t('reps.form.instructions') }}</p>
      <form @submit.prevent="searchReps" v-if="representatives.length === 0">
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
      <template v-else>
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
            <a :href="mailtoAddress(rep)" class="btn btn--blue btn--block">Send Email</a>
          </div>
        </div>
        <button @click="reset" class="btn btn--default">
          {{ $t('reps.form.searchAgain') }}
        </button>
      </template>
    </vue-final-modal>
  </div>
</template>

<script>
import OpenNorth from "../OpenNorth";

export default {
  data: () => ({
    showModal: false,
    submitterName: '',
    postal: '',
    formError: '',
    representatives: []
  }),
  methods: {
    focusInput: function () {
      this.$refs.postalInput.focus();
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
        this.formError = this.$t('reps.form.error.notFound');
      }
    },
    repStyle: function (rep) {
      return {
        backgroundImage: rep.photo_url ? `url('${rep.photo_url}')` : none
      };
    },
    mailtoAddress: function (rep) {
      let email = encodeURI(rep.email);
      let subject = encodeURIComponent(this.$t('reps.emailTitle'));
      let body = encodeURIComponent(this.$t('reps.emailBody', {
        ministerName: rep.name,
        submitterName: this.submitterName,
        submitterPostal: this.postal
      }));
      return `mailto:${email}?subject=${subject}&body=${body}`;
    },
    reset: function () {
      this.submitterName = '',
      this.postal = '';
      this.representatives = [];
      this.formError = '';
    }
  }
}
</script>
