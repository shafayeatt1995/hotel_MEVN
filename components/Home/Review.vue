<template>
  <section class="relative lg:py-24 py-16 overflow-hidden">
    <div class="container relative lg:mt-24 mt-16 mx-auto">
      <div class="grid grid-cols-1 pb-6 text-center">
        <h3
          class="mb-6 lg:text-3xl text-2xl lg:leading-normal leading-normal font-semibold"
        >
          What Our Users Say
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          This is just a simple text made for this unique and awesome template,
          you can replace it with any text.
        </p>
      </div>
      <!-- :autoplay="true" -->
      <carousel
        :stage-padding="50"
        :nav="false"
        :dots="false"
        :loop="true"
        :responsive="{
          600: { items: 1 },
          1000: { items: 3 },
        }"
        class="review"
      >
        <div class="text-center">
          <div class="cursor-e-resize">
            <div
              class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left"
            >
              <i
                class="fas fa-quote-right mdi mdi-format-quote-open mdi-48px text-blue-500"
              ></i>
              <p class="text-slate-400">
                " It seems that only fragments of the original text remain in
                the Lorem Ipsum texts used today. "
              </p>
              <ul class="list-none mb-0 text-amber-400 mt-3">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>

            <div class="text-center mt-5">
              <div class="flex justify-center">
                <img
                  src="/images/client/01.jpg"
                  class="h-16 rounded-full shadow-md dark:shadow-gray-700"
                  alt=""
                />
              </div>
              <h6 class="mt-2 font-semibold">Calvin Carlo</h6>
              <span class="text-slate-400 text-sm">Manager</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="cursor-e-resize">
            <div
              class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left"
            >
              <i class="mdi mdi-format-quote-open mdi-48px text-blue-500"></i>
              <p class="text-slate-400">
                " The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. "
              </p>
              <ul class="list-none mb-0 text-amber-400 mt-3">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>

            <div class="text-center mt-5">
              <img
                src="/images/client/02.jpg"
                class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                alt=""
              />
              <h6 class="mt-2 font-semibold">Christa Smith</h6>
              <span class="text-slate-400 text-sm">Manager</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="cursor-e-resize">
            <div
              class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left"
            >
              <i class="mdi mdi-format-quote-open mdi-48px text-blue-500"></i>
              <p class="text-slate-400">
                " One disadvantage of Lorum Ipsum is that in Latin certain
                letters appear more frequently than others. "
              </p>
              <ul class="list-none mb-0 text-amber-400 mt-3">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>

            <div class="text-center mt-5">
              <img
                src="/images/client/03.jpg"
                class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                alt=""
              />
              <h6 class="mt-2 font-semibold">Jemina CLone</h6>
              <span class="text-slate-400 text-sm">Manager</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="cursor-e-resize">
            <div
              class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left"
            >
              <i class="mdi mdi-format-quote-open mdi-48px text-blue-500"></i>
              <p class="text-slate-400">
                " Thus, Lorem Ipsum has only limited suitability as a visual
                filler for German texts. "
              </p>
              <ul class="list-none mb-0 text-amber-400 mt-3">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>

            <div class="text-center mt-5">
              <img
                src="/images/client/04.jpg"
                class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                alt=""
              />
              <h6 class="mt-2 font-semibold">Smith Vodka</h6>
              <span class="text-slate-400 text-sm">Manager</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="cursor-e-resize">
            <div
              class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left"
            >
              <i class="mdi mdi-format-quote-open mdi-48px text-blue-500"></i>
              <p class="text-slate-400">
                " There is now an abundance of readable dummy texts. These are
                usually used when a text is required. "
              </p>
              <ul class="list-none mb-0 text-amber-400 mt-3">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>

            <div class="text-center mt-5">
              <img
                src="/images/client/05.jpg"
                class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                alt=""
              />
              <h6 class="mt-2 font-semibold">Cristino Murfi</h6>
              <span class="text-slate-400 text-sm">Manager</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="cursor-e-resize">
            <div
              class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left"
            >
              <i class="mdi mdi-format-quote-open mdi-48px text-blue-500"></i>
              <p class="text-slate-400">
                " According to most sources, Lorum Ipsum can be traced back to a
                text composed by Cicero. "
              </p>
              <ul class="list-none mb-0 text-amber-400 mt-3">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>

            <div class="text-center mt-5">
              <img
                src="/images/client/06.jpg"
                class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                alt=""
              />
              <h6 class="mt-2 font-semibold">Cristino Murfi</h6>
              <span class="text-slate-400 text-sm">Manager</span>
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeReview',
}
</script>

<style>
.review .owl-carousel .owl-item img {
  width: auto;
}
</style>
