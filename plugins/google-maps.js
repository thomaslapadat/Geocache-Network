import Vue from "vue";

import * as VueGoogleMaps from "@/node_modules/vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: { key: '' }
  // Please add API key here, I removed mine for the commit 
});