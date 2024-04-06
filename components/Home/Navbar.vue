<template>
  <nav class="sticky top-0 bg-white dark:bg-slate-900 shadow-md z-10">
    <div
      class="container px-4 py-2 mx-auto lg:flex lg:justify-between lg:items-center"
    >
      <div class="flex items-center justify-between">
        <nuxt-link :to="{ name: 'index' }">
          <img
            loading="lazy"
            class="lg:h-14 h-12 object-contain"
            src="/images/logo.svg"
            alt="logo"
          />
        </nuxt-link>

        <div class="flex lg:hidden">
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            type="button"
            @click="isOpen = !isOpen"
          >
            <i class="fas fa-align-justify" />
          </button>
        </div>
      </div>

      <div
        :class="[
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full',
        ]"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-200 ease-in-out bg-white lg:bg-transparent lg: lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center shadow-xl lg:shadow-none"
      >
        <div class="flex flex-col lg:flex-row">
          <nuxt-link
            :to="{ name: 'index' }"
            class="my-2 text-gray-700 dark:text-white transition-colors duration-200 transform hover:text-blue-600 lg:my-0"
          >
            Home
          </nuxt-link>
        </div>
        <div class="flex flex-col lg:flex-row lg:mx-6">
          <button
            class="my-2 text-gray-700 dark:text-white transition-colors duration-200 transform hover:text-blue-600 lg:my-0"
            @click="bkashPayment"
          >
            Bkash payment
          </button>
        </div>

        <div class="flex justify-center lg:block">
          <nuxt-link
            class="px-7 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-700 focus:outline-none focus:bg-blue-700 font-bold"
            :to="{ name: 'admin-login' }"
          >
            Login
          </nuxt-link>
        </div>
        <DarkMode class="ml-3" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HomeNavBar',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    async bkashPayment() {},
  },
}
</script>
