<template>
  <div class="flex justify-between pt-24 pr-32 pl-4">
    <div v-for="station in stationsWithArrivalTimes" :key="station.id" class="relative">
      <div
        v-if="station.arrivalTimeInMinutes < 3"
        :class="{ 'bg-red-500': station.arrivalTimeInMinutes < 1, 'bg-blue-500': station.arrivalTimeInMinutes >= 1 }"
        :style="positionStyle"
        class="metro absolute w-5 h-5">
      </div>

      <MetroStation :name="station.name" />
    </div>
  </div>
</template>

<script>
import MetroStation from '@/components/MetroStation.vue'

import { statusToArrivalTime } from '@/utils'

export default {
  components: {
    MetroStation
  },
  props: {
    stations: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      leftPos: 0
    }
  },
  // Les computed properties trackent leur dépendances (variables dans 'data')
  // elles sont réévaluées à chaque fois que la data change
  computed: {
    positionStyle () {
      return 'left: ' + this.leftPos + 'px'
    },

    stationsWithArrivalTimes () {
      return this.stations.map(station => {
        return {
          ...station,
          arrivalTimeInMinutes: statusToArrivalTime(station.schedules[0].message)
        }
      })
    },

    stationsWithNextMetros () {
      return this.arrivalTimeInMinutes.filter(minutes => minutes < 2)
    }
  },

  mounted () {
    // Move blue dot
    setInterval(() => {
      this.leftPos++
    }, 200)
  }
}
</script>

<style scoped>
.metro {
  transition: left 0.5s;
}
</style>
