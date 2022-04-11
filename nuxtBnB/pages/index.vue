<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectId"
      style="float: left; margin: 10px"
    >
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home"></home-card>
      </nuxt-link>
      <!-- <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home"></home-card>
      </nuxt-link> -->
      <!-- <router-link :to="`/home/${home.objectID}`">
        <home-card :home="home"></home-card>
      </router-link> -->
      <!-- <a :href="`/home/${home.objectID}`">
        <home-card :home="home"></home-card>
      </a> -->
    </div>
  </div>
</template>
<script>
import homes from "~/data/homes";

export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "descriptions",
          content: "this is a homepage!",
          hid: "descriptions",
        },
      ],
    };
  },
  data() {
    return {
      homes: homes.slice(0, 3),
    };
  },
};
</script>

    