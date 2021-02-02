<template>
  <vue-final-modal v-model="showModal"
                   classes="modal-container"
                   content-class="modal-content"
                   focus-trap
                   name="donation-modal">
    <h1 class="modal--header">{{ $t('donation.modalHeader') }}</h1>
    <button class="modal__close" @click="showModal = false">
      <i class="fas fa-times"></i>
    </button>
    <p>{{ $t('donation.content') }}</p>
    <ol>
      <li v-for="instruction in $t('donation.instructions')" v-html="instruction"></li>
    </ol>
    <a :href="$t('donation.buttonUrl')"
       class="btn btn--block btn--blue"
       target="_blank"
       rel="noopener">
      {{$t('donation.buttonText')}}
    </a>
  </vue-final-modal>
</template>

<script>
export default {
  name: "DonationModal",
  data: () => {
    return {
      showModal: false
    }
  }
}
</script>
