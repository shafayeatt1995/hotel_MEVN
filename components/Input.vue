<template>
  <slide-up-down :active="!field.hide" :duration="300">
    <div class="mt-3">
      <label v-if="field.label" class="text-gray-700" :for="field.label?.id">{{
        field.label?.title
      }}</label>
      <div class="relative flex items-center">
        <span v-if="field.icon" class="absolute">
          <i :class="field.icon" class="w-5 h-5 mx-3 text-gray-300" />
        </span>
        <span
          v-if="field.inlineSubmit?.show"
          class="absolute right-0 top-0 h-full"
        >
          <Button class="h-full" @click.native.prevent="$emit('action')">
            <i
              v-if="field.inlineSubmit.icon"
              :class="field.inlineSubmit.icon"
            />
            {{ field.inlineSubmit.text }}
          </Button>
        </span>
        <select
          v-if="field.type === 'select'"
          :id="field.label?.id"
          v-model="data[field.name]"
          class="block w-full py-2 text-gray-700 bg-white border rounded-lg focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          :class="field.icon ? 'px-11' : ' px-4'"
        >
          <option v-if="field.showEmptySelect ?? true" value="">
            {{ field.placeholder }}
          </option>
          <option
            v-for="(option, i) in field.options"
            :key="i"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <template v-else-if="field.type === 'editor'">
          <client-only>
            <VueEditor v-model="data[field.name]" :name="field.name" />
          </client-only>
        </template>
        <textarea
          v-else-if="field.type === 'textarea'"
          :id="field.label?.id"
          v-model="data[field.name]"
          :cols="field.textarea?.cols ?? 30"
          :rows="field.textarea?.rows ?? 10"
          :name="field.name"
          class="block w-full py-2 text-gray-700 bg-white border rounded-lg focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          :class="[
            field.inlineSubmit?.show
              ? 'pl-4 pr-14'
              : field.icon
              ? 'px-11'
              : ' px-4',
          ]"
          :placeholder="field.placeholder"
        />
        <input
          v-else-if="field.type === 'color'"
          :id="field.label?.id"
          v-model="data[field.name]"
          :type="field.type"
          class="block w-full bg-white border rounded-lg focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          :name="field.name"
        />
        <input
          v-else
          :id="field.label?.id"
          v-model="data[field.name]"
          :type="field.type"
          class="block w-full py-2 text-gray-700 bg-white border rounded-lg focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          :class="[
            field.inlineSubmit?.show
              ? 'pl-4 pr-14'
              : field.icon
              ? 'px-11'
              : ' px-4',
          ]"
          :placeholder="field.placeholder"
          :name="field.name"
        />
      </div>
      <small
        v-if="
          errors && errors[field.name] && typeof errors[field.name] === 'object'
        "
        class="text-rose-700"
      >
        <i>{{ errors[field.name].msg }}</i>
      </small>
    </div>
  </slide-up-down>
</template>
<script>
export default {
  name: 'VueInput',
  props: {
    field: { type: Object, default: null },
    errors: { type: Object, default: null },
    options: { type: Array, default: () => [] },
    textarea: { type: Object, default: null },
  },
  computed: {
    data: {
      get() {
        return this.$attrs.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
