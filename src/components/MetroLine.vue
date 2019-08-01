<template>
  <div class="flex justify-between pt-24 pr-32 pl-4 relative">
    <div class="metro absolute w-5 h-5 bg-blue-500" :style="positionStyle"></div>
    <MetroStation
      v-for="station in stations"
      :name="station.name"
      :key="station.id"
    />
  </div>
</template>

<script>
import axios from 'axios'

import MetroStation from '@/components/MetroStation.vue'

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
    }
  },

  async mounted () {
    // Move blue dot
    // setInterval(() => {
    //   this.leftPos++
    // }, 200)

    // MAP: pour chaque element dans this.stations, on applique une transformation
    // ici : on aura donc un tableau de 11 éléments contenant la valeur retournée par la fonction ci-dessous
    // this.stations => this.line
    this.line = await Promise.all(this.stations.map(async (station) => {
      const endpoint = 'https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/11/' + station.id + '/' + 'R'

      const response = await axios.get(endpoint)
      console.log(response.data.result.schedules)
      return {
        // id: station.id,
        // name: station.name,
        ...station, // = récupérer toutes les clés dans l'objet station (uniquement 'id' et 'name' en fait)
        schedules: response.data.result.schedules
      }
    }))
  }
}
</script>

<style scoped>
.metro {
  transition: left 0.5s;
}
</style>
