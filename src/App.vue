<template>
  <v-app>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    // console.log("env" + process.env.VUE_APP_FIREBASE_API_KEY);
  },
};
</script>
