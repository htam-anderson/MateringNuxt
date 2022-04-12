<template>
  <div>
    <div style="display: flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        width="200"
        height="150"
      />
    </div>
    {{ home.title }} <br />
    ${{ home.pricePerNight }} / night <br />
    <img src="/images/marker.svg" width="20" height="20" />{{
      home.location.address
    }}
    {{ home.location.city }} {{ home.location.state }}
    {{ home.location.country }} <br />
    <img src="/images/star.svg" width="20" height="20" />{{ home.reviewValue }}
    <br />
    {{ home.guests }} guest, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
    {{ home.bathrooms }} baths <br />
    {{ home.description }}
    <div style="height: 800px; width: 800px" ref="map"></div>
  </div>
</template>
<script>
import homes from "~/data/homes";

/**
 * NOTE STEP 1
 * Put the code here will not help running the callback initMap
 * Since the nuxt will not regconized the window function here
 * */
// if (process.client) {
//   window.initMap = function () {
//     console.log("test");
//   };
// }

export default {
  layout: "red",
  head() {
    return {
      title: this.home.title,
      /**
       * This belowed code will be migrate to plugin by function addscript() and initMap()
       */
      // script: [
      //   {
      //     src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDjU1jzvr-EYmb7L51It1L4jA6C_wtJfxo&libraries=places&callback=initMap",
      //     hid: "map",
      //     // defer: true,
      //     async: true,
      //     skip: process.client && window.mapLoaded
      //   },
      //   /**
      //    * NOTE STEP 2
      //    * Instead put another object and take advantages of JS window  here
      //    *
      //    */
      //   {
      //     /** 
      //      * NOTE STEP 4
      //      * So now after we can test the script console running on the browser 
      //      * we change it to 
      //      */ 
      //     // innerHTML: "console.log('test')",
      //     innerHTML: "window.initMap = function(){ window.mapLoaded = true}",
      //     hid: "map-init",
      //   },
      // ],
      // /**
      //  * NOTE STEP 3
      //  * Scine we took advantage of head() to render another script tag in DOM
      //  * Nuxt will automatically sanitized the special charactor of '
      //  * *** THIS IS NOT RECOMMEND BUT GIVE IT A TRY TO DO ***
      //  * *** AFTER TEST DONE WE WILL REMOVE THIS CODE FOR SAFETY ***
      //  */
      // // __dangerouslyDisableSanitizersByTagID: {
      // //   "map-init": ["innerHTML"],
      // // },
    };
  },
  data() {
    return {
      home: {},
    };
  },
  methods: {
    /**
     * This belowed code will be moved to plugin by function renderMap()
     */
    // showMap() {
    //   console.log('mounted!!!')
    //   const mapOptions = {
    //   zoom: 18,
    //   center: new window.google.maps.LatLng(
    //     this.home._geoloc.lat,
    //     this.home._geoloc.lng
    //   ),
    //   disableDefaultUI: true,
    //   zoomControl: true,
    // };
    // const map = new window.google.maps.Map(this.$refs.map, mapOptions);
    // const position = new window.google.maps.LatLng(
    //   this.home._geoloc.lat,
    //   this.home._geoloc.lng
    // );
    // const marker = new window.google.maps.Marker({ position: position });
    // marker.setMap(map);
    // }
  },
  mounted() {
    /**
     * This belowed code will be migrate to plugin by function showMap()
     */
    // const timer = setInterval(() => {
    //   if (window.mapLoaded) {
    //     clearInterval(timer)
    //     this.showMap()
    //   }
    // }, 200)
    this.$maps.showMap(this.$refs.map,this.home._geoloc.lat,this.home._geoloc.lng);
  },
  created() {
    const home = homes.find((home) => home.objectID == this.$route.params.id);
    this.home = home;
  },
};
</script>
