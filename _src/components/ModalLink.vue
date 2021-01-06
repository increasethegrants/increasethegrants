<template>
  <a href="#" @click.prevent="$vfm.show(name)"><slot></slot></a>
</template>

<script>
export default {
  name: "ModalLink",
  props: ['name']
}
</script>

<style scoped>

</style>