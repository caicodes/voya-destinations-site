<template>
  <div class="flex w-12 flex-col items-center justify-center bg-primary rounded-full fixed top-4 right-4">
    <div v-for="color of colors" :key="color" class="icon-colormode">
      <component :is="`icon-${color}`" class="flex w-12 h-12 p-4 cursor-pointer text-primary-content"
        :class="getClasses(color)" @click="$colorMode.preference = color" />
    </div>
  </div>
</template>

<script>
import IconSystem from '@/components/colormode/icons/system.svg.vue'
import IconLight from '@/components/colormode/icons/light.svg.vue'
import IconDark from '@/components/colormode/icons/dark.svg.vue'
import IconCoffee from '~~/components/colormode/icons/coffee.svg.vue'

export default {
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconCoffee,
  },

  data() {
    return {
      colors: ['system', 'light', 'dark', 'coffee'],
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

