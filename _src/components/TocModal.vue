<template>
  <vue-final-modal v-model="showModal"
                   classes="modal-container"
                   content-class="modal-content modal--tiny"
                   focus-trap
                   name="toc-modal">
    <h1 class="modal--header">{{ $t('toc.modalHeader') }}</h1>
    <div @click="showModal = false">
      <slot></slot>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: "TocModal",
  data: () => {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>

</style>