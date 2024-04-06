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
          class="max-w-96 w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md"
        >
          <div class="flex justify-center">
            <nuxt-link
              :to="{ name: 'index' }"
              class="mx-auto max-h-20 inline-flex"
            >
              <img
                src="/images/logo.svg"
                class="object-contain max-h-20 px-5"
                alt=""
              />
            </nuxt-link>
          </div>
          <h1 class="mt-6 text-2xl font-semibold">Login</h1>
          <form class="text-start" @submit.prevent="login">
            <div class="grid grid-cols-1">
              <Input
                v-for="(field, i) in loginInputFields"
                :key="i"
                v-model="form"
                :field="field"
                :errors="errors"
              />
              <div class="flex justify-between mt-4">
                <div class="flex items-center mb-0">
                  <input
                    id="RememberMe"
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
              </div>

              <div class="my-4">
                <Button type="submit" class="w-full">Login / Sign in</Button>
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
      errors: {},
    }
  },
  head() {
    return { title: `Admin login - ${process.env.APP_NAME}` }
  },
  computed: {
    loginInputFields() {
      return [
        {
          type: 'text',
          placeholder: 'Type your ID',
          name: 'email',
          label: `Email / Phone / ID`,
        },
        {
          type: 'password',
          placeholder: 'Type your password',
          name: 'password',
          label: 'Password',
        },
      ]
    },
  },
  methods: {
    login() {},
  },
}
</script>

<style></style>
