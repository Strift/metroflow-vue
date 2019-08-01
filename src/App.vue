<template>
  <div id="app" class="metro">

    <div class="flex justify-between pt-24 pr-32 pl-4 relative">
      <div class="metro absolute w-5 h-5 bg-blue-500" :style="positionStyle"></div>
      <Station
        v-for="station in line"
        :name="station.name"
        :key="station.id"
      />
    </div>
  </div>
</template>

<script>
import Station from '@/components/Station.vue'

import axios from 'axios'

const ligne11 = [
  // {"id": "chatelet", "name": "Châtelet", "width": 283, "height":161.5},
  { 'id': 'hotel+de+ville', 'name': 'Hôtel de Ville' },
  { 'id': 'rambuteau', 'name': 'Rambuteau' },
  { 'id': 'arts+et+metiers', 'name': 'Arts et Métiers' },
  { 'id': 'republique', 'name': 'République' },
  { 'id': 'goncourt', 'name': 'Goncourt' },
  { 'id': 'belleville', 'name': 'Belleville' },
  { 'id': 'pyrenees', 'name': 'Pyrénées' },
  { 'id': 'jourdain', 'name': 'Jourdain' },
  { 'id': 'place+des+fetes', 'name': 'Place des Fêtes' },
  { 'id': 'telegraphe', 'name': 'Télégraphe' },
  { 'id': 'porte+des+lilas', 'name': 'Porte des Lilas' },
  { 'id': 'mairie+des+lilas', 'name': 'Mairie des Lilas' }
]

export default {

  name: 'app',
  components: {
    Station
  },
  data () {
    return {
      line: [],
      leftPos: 0
    }
  },
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

    // MAP: pour chaque element dans ligne11, on applique une transformation
    // ici : on aura donc un tableau de 11 éléments contenant la valeur retournée par la fonction ci-dessous
    // ligne11 => this.line
    this.line = await Promise.all(ligne11.map(async (station) => {
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
