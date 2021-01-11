<template>
  <div class="cta-buttons container">
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('representatives-modal')">
      {{ $t('sidebar.buttons.representatives') }}
    </button>
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('petition-modal')">
      {{ $t('sidebar.buttons.petition') }}
    </button>
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('social-modal')">
      {{ $t('sidebar.buttons.social') }}
    </button>
    <button class="btn btn--block btn--blue"
            @click="$vfm.show('donation-modal')">
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