<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="headline" color="blue">
        <span>Flickr</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
