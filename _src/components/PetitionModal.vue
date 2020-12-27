<template>
  <vue-final-modal v-model="showModal"
                   classes="modal-container"
                   content-class="modal-content modal--large"
                   focus-trap
                   name="petition-modal">
    <h1 class="modal--header">{{ $t('petition.modalHeader') }}</h1>
    <button class="modal__close" @click="showModal = false">
      <i class="fas fa-times"></i>
    </button>
    <iframe src="https://www.petitions.net/emb/303450"
            class="petition-embed"></iframe>
  </vue-final-modal>
</template>

<script>
export default {
  name: "PetitionModal",
  data: () => {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>

</style>