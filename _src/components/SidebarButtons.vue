<template>
  <div class="sidebar-buttons">
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('petition-modal')">
      {{ $t('sidebar.buttons.petition') }}
    </button>
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('representativesModal')">
      {{ $t('sidebar.buttons.representatives') }}
    </button>
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('social-modal')">
      {{ $t('sidebar.buttons.social') }}
    </button>
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('donations-modal')">
      {{ $t('sidebar.buttons.donation') }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SidebarButtons.vue"
}
</script>

<style scoped>

</style>