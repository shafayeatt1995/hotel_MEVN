<template>
  <transition name="fade">
    <button
      v-show="showButton"
      class="fixed text-lg rounded-md z-10 bottom-5 end-5 size-12 text-center bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white justify-center items-center"
      @click="scrollToTop"
    >
      <i class="fa-solid fa-arrow-up" />
    </button>
  </transition>
</template>
<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      showButton: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
