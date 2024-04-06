<template>
  <div>
    <Nuxt />
    <ScrollTop />
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',

  created() {
    this.$nuxt.$on('success', (success) => {
      // this.$toast.success(success);
    })

    // Trigger Error Toast Message
    this.$nuxt.$on('error', (message) => {
      // this.$toast.error(message);
    })

    // Trigger Info Toast Message
    this.$nuxt.$on('warning', (warning) => {
      // this.$toast.warning(warning);
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('success')
    this.$nuxt.$off('error')
    this.$nuxt.$off('warning')
  },
}
</script>

<style>
*,
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Red Hat Display', sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
