<template>
  <div>
    <div class="name">{{ name }}</div>
    <div class="h-6 w-6 rounded-full bg-red-500"></div>
  </div>
</template>

<script>
export default {
  // Equivalent à des arguments dans un ccnstructeur
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      schedules: []
    }
  }
}
</script>

<style scoped>
.name {
  transform: rotate(-45deg);
}
</style>
