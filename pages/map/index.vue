<template>
  <v-container fluid fill-height class="d-flex flex-column justify-space-around align-center">
    <h1>Local Geocaches</h1>
    <GmapMap 
    id="siteMap"
    :center="center" 
    :map-type-id="mapTypeId" 
    :zoom="18"
    >
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>
    <!-- <v-pagination
        v-model="page"
        :length="6"
    ></v-pagination> -->
  </v-container>
</template>

<script>
// Firebase setup
const fb = require("@/plugins/firebase.js");

export default {
  layout: "application",
  data() {
    return {
      center: { lat: 49.324990, lng: -123.102740 },
      mapTypeId: "roadmap",
      markers: [
        // Default, to be overridden
        // { position: { lat: 49.325000, lng: -123.102850 } },
        // { position: { lat: 49.324980, lng: -123.102630 } }
      ]
    };
  },
  middleware: 'authenticated',
  methods: {
    queryDB() {
      let myCaches = []
      fb.cacheCollection
        .get()
        .then(function(response) {
          response.forEach(function(doc) {
            let cache = (({user, lat, lng}) => ({user, lat, lng}))(doc.data());
            let lat = cache.lat
            let lng = cache.lng
            // Push current entry into overall array 
            myCaches.push({ position: {lat, lng}});
            console.log(cache);
          });
          console.log(myCaches);
        })
        .catch(function(error) {
          console.log("Error:", error);
        });
      this.markers = myCaches;
    }
  },
  created() {
    this.queryDB()
  }
};
</script>

<style scoped>
#siteMap {
    width: 100%; 
    max-width: 1000px; 
    height: 600px;
}
h1 {
    font-size: 3em;
}
</style>