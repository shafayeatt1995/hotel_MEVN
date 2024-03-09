<template>
  <section class="relative lg:py-24 py-16 overflow-hidden">
    <div class="container relative lg:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-6 text-center">
        <h3
          class="mb-6 lg:text-3xl text-2xl lg:leading-normal leading-normal font-semibold"
        >
          Travel Blogs
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          This is just a simple text made for this unique and awesome template,
          you can replace it with any text.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div class="group relative overflow-hidden">
          <div
            class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
          >
            <img
              src="assets/images/blog/1.jpg"
              class="group-hover:scale-110 group-hover:rotate-3 duration-500"
              alt=""
            />
            <div
              class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500"
            >
              <span
                class="bg-blue-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5"
                >Travel</span
              >
            </div>
          </div>

          <div class="mt-6">
            <div class="flex mb-4">
              <span class="flex items-center text-slate-400 text-sm"
                ><i
                  data-feather="clock"
                  class="size-4 text-slate-900 dark:text-white me-1.5"
                ></i
                >5 min read</span
              >
              <span class="text-slate-400 text-sm ms-3"
                >by
                <a
                  href="#"
                  class="text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-medium"
                  >Travosy</a
                ></span
              >
            </div>

            <a
              href="blog-detail.html"
              class="text-lg font-medium hover:text-blue-500 duration-500 ease-in-out"
              >This Spanish city is a feast for the eyes: Travosy</a
            >
            <p class="text-slate-400 mt-2">
              This is required when, for example, the final text is not yet
              available.
            </p>

            <div class="mt-3">
              <a
                href="blog-detail.html"
                class="hover:text-blue-500 inline-flex items-center"
                >Read More
                <i data-feather="chevron-right" class="size-4 ms-1"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden">
          <div
            class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
          >
            <img
              src="assets/images/blog/2.jpg"
              class="group-hover:scale-110 group-hover:rotate-3 duration-500"
              alt=""
            />
            <div
              class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500"
            >
              <span
                class="bg-blue-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5"
                >Tour</span
              >
            </div>
          </div>

          <div class="mt-6">
            <div class="flex mb-4">
              <span class="flex items-center text-slate-400 text-sm"
                ><i
                  data-feather="clock"
                  class="size-4 text-slate-900 dark:text-white me-1.5"
                ></i
                >5 min read</span
              >
              <span class="text-slate-400 text-sm ms-3"
                >by
                <a
                  href="#"
                  class="text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-medium"
                  >Travosy</a
                ></span
              >
            </div>

            <a
              href="blog-detail.html"
              class="text-lg font-medium hover:text-blue-500 duration-500 ease-in-out"
              >New Zealand’s South Island brims with majestic</a
            >
            <p class="text-slate-400 mt-2">
              This is required when, for example, the final text is not yet
              available.
            </p>

            <div class="mt-3">
              <a
                href="blog-detail.html"
                class="hover:text-blue-500 inline-flex items-center"
                >Read More
                <i data-feather="chevron-right" class="size-4 ms-1"></i
              ></a>
            </div>
          </div>
        </div>
        <!--end content-->

        <div class="group relative overflow-hidden">
          <div
            class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
          >
            <img
              src="assets/images/blog/3.jpg"
              class="group-hover:scale-110 group-hover:rotate-3 duration-500"
              alt=""
            />
            <div
              class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500"
            >
              <span
                class="bg-blue-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5"
                >Tourist</span
              >
            </div>
          </div>

          <div class="mt-6">
            <div class="flex mb-4">
              <span class="flex items-center text-slate-400 text-sm"
                ><i
                  data-feather="clock"
                  class="size-4 text-slate-900 dark:text-white me-1.5"
                ></i
                >5 min read</span
              >
              <span class="text-slate-400 text-sm ms-3"
                >by
                <a
                  href="#"
                  class="text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-medium"
                  >Travosy</a
                ></span
              >
            </div>

            <a
              href="blog-detail.html"
              class="text-lg font-medium hover:text-blue-500 duration-500 ease-in-out"
              >When you visit the Eternal Rome City: Travosy</a
            >
            <p class="text-slate-400 mt-2">
              This is required when, for example, the final text is not yet
              available.
            </p>

            <div class="mt-3">
              <a
                href="blog-detail.html"
                class="hover:text-blue-500 inline-flex items-center"
                >Read More
                <i data-feather="chevron-right" class="size-4 ms-1"></i
              ></a>
            </div>
          </div>
        </div>
        <!--end content-->
      </div>
      <!--end grid-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBlog',
}
</script>
