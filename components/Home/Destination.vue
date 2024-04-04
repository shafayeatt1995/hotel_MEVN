<template>
  <section class="relative py-16 overflow-hidden">
    <div class="container relative mx-auto">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3
          class="mb-2 lg:text-3xl text-2xl lg:leading-normal leading-normal font-semibold"
        >
          Top Destinations
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          Planning for a trip? We will organize your trip with the best places
          and within best budget!
        </p>
      </div>
      <carousel
        :autoplay="true"
        :stage-padding="50"
        :nav="false"
        :dots="false"
        :loop="true"
        :responsive="{
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 5 },
        }"
      >
        <div
          v-for="(item, key) in items"
          :key="key"
          href="#"
          class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2"
        >
          <img
            :src="item.img"
            class="w-full h-72 object-cover scale-100 group-hover:scale-110 duration-500"
            :alt="item.name"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-50 group-hover:opacity-100 duration-500"
          ></div>
          <div class="absolute p-4 bottom-0 start-0">
            <p
              class="text-lg font-medium text-white hover:text-blue-500 duration-500 ease-in-out"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
      </carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeDestination',
  data() {
    return {
      items: [
        { name: 'Rome, Italy', img: '/images/listing/1.jpg' },
        { name: 'Singapore', img: '/images/listing/2.jpg' },
        { name: 'Paris, France', img: '/images/listing/3.jpg' },
        { name: 'Goa, India', img: '/images/listing/4.jpg' },
        { name: 'Whistler,', img: '/images/listing/5.jpg' },
        { name: 'Kuala Lumpur, Malaysia', img: '/images/listing/6.jpg' },
        { name: 'Sydney, Australia', img: '/images/listing/7.jpg' },
      ],
    }
  },
}
</script>
