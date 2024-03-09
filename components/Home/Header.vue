<template>
  <section
    class="relative lg:pt-72 lg:pb-60 py-36 table w-full items-center bg-[url('/images/bg/1.jpg')] bg-top bg-no-repeat bg-cover"
  >
    <div class="absolute inset-0 bg-slate-900/40"></div>
    <div class="container relative mx-auto">
      <div
        class="grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]"
      >
        <div class="lg:col-span-8 lg:order-1 order-2">
          <h5 class="text-3xl font-dancing text-white">Beauty of Discover</h5>
          <h4
            class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5"
          >
            Let's Leave The Road, <br />
            And Take The Travosy
          </h4>
          <p class="text-white/70 text-xl max-w-xl">
            Planning for a trip? We will organize your trip with the best places
            and within best budget!
          </p>
        </div>

        <div class="lg:col-span-4 lg:text-center lg:order-2 order-1">
          <button
            href="#"
            class="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-blue-500 text-blue-500 hover:text-white duration-500 ease-in-out mx-auto"
          >
            <i
              class="fa-regular fa-circle-play inline-flex items-center justify-center text-5xl"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>
