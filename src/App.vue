<template>
  <div id="app" class="metro">

    <MetroLine
      :stations="line11Stations"
      class="bg-blue-200"

    />
  </div>
</template>

<script>
import axios from 'axios'

// '@' == 'rc'
import MetroLine from '@/components/MetroLine.vue'

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
    MetroLine
  },

  data () {
    return {
      line11Stations: []
    }
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    async fetchData () {
    // MAP: pour chaque element dans ligne11, on applique une transformation
    // ici : on aura donc un tableau de 11 éléments contenant la valeur retournée par la fonction ci-dessous
    // ligne11import axios from 'axios' => this.line
      this.line11Stations = await Promise.all(ligne11.map(async (station) => {
        const endpoint = 'https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/11/' + station.id + '/' + 'R'

        const response = await axios.get(endpoint)
        return {
        // id: station.id,
        // name: station.name,
          ...station, // = récupérer toutes les clés dans l'objet station (uniquement 'id' et 'name' en fait)
          schedules: response.data.result.schedules
        }
      }))
    }
  }
}
</script>
