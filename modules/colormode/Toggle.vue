<template>
  <div class="flex w-12 flex-col items-center justify-center bg-accent rounded-full fixed top-20 left-4">
    <div v-for="color of colors" :key="color" class="icon-colormode">
      <component :is="`icon-${color}`" class="flex w-12 h-12 p-3 cursor-pointer text-accent-content"
        :class="getClasses(color)" @click="$colorMode.preference = color" />
    </div>
  </div>
</template>

<script>
import IconLight from '@/components/colormode/icons/light.svg.vue'
import IconDark from '@/components/colormode/icons/dark.svg.vue'

export default {
  components: {
    IconLight,
    IconDark,
  },

  data() {
    return {
      colors: ['light', 'dark',],
    }
  },

  methods: {
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>
