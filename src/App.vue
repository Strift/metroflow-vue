<template>
  <div id="app" class="metro">

    <MetroLine :stations="line11Stations"/>
  </div>
</template>

<script>
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
      line11Stations: ligne11
    }
  }
}
</script>
