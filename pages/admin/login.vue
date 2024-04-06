<template>
  <section
    class="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image"
  >
    <div
      class="absolute inset-0 image-wrap z-1 bg-[url('/images/bg/2.jpeg')] bg-no-repeat bg-center bg-cover"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
    ></div>
    <div class="container mx-auto relative z-10">
      <div class="flex justify-center">
        <div
          class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md"
        >
          <nuxt-link :to="{ name: 'index' }"
            ><img src="/images/logo.svg" class="mx-auto max-h-20" alt=""
          /></nuxt-link>
          <h5 class="my-6 text-xl font-semibold">Login</h5>
          <form class="text-start" @submit.prevent="login">
            <div class="grid grid-cols-1">
              <div class="mb-4">
                <label class="font-semibold" for="LoginEmail"
                  >Email Address:</label
                >
                <input
                  v-model="form.email"
                  type="text"
                  class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Type your ID"
                />
              </div>

              <div class="mb-4">
                <label class="font-semibold" for="LoginPassword"
                  >Password:</label
                >
                <input
                  v-model="form.password"
                  type="password"
                  class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Password:"
                />
              </div>

              <div class="flex justify-between mb-4">
                <div class="flex items-center mb-0">
                  <input
                    class="form-checkbox rounded border-gray-100 dark:border-gray-800 text-blue-500 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 focus:ring-opacity-50 me-2"
                    type="checkbox"
                    value=""
                  />
                  <label
                    class="form-checkbox-label text-slate-400"
                    for="RememberMe"
                    >Remember me</label
                  >
                </div>
                <p class="text-slate-400 mb-0">
                  <a href="forgot-password.html" class="text-slate-400"
                    >Forgot password ?</a
                  >
                </p>
              </div>

              <div class="mb-4">
                <input
                  type="submit"
                  class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-blue-500 text-white rounded-md w-full"
                  value="Login / Sign in"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  head() {
    return { title: `Admin login - ${process.env.APP_NAME}` }
  },
  methods: {
    login() {},
  },
}
</script>

<style></style>
