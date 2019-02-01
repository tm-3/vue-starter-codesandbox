<template>
  <v-app dark>
    <v-navigation-drawer
      clipped
      v-model="drawer"
      app
      fixed
      mobile-break-point="800"
    >
    </v-navigation-drawer>
    <v-toolbar app clipped-left color="primary">
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>settings</v-icon> </v-btn>
      <v-btn icon> <v-icon>info</v-icon> </v-btn>
      <v-btn icon> <v-icon>account_circle</v-icon> </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex></v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app clipped-left color="primary">
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>feedback</v-icon> </v-btn>
      <v-btn icon> <v-icon>bug_report</v-icon> </v-btn>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

export default Vue.extend({
  data() {
    return {
      drawer: false,
      toolbarTitle: 'App Name',
    };
  },
  props: {
    source: String,
    menu: [],
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  watch: {},
});
</script>
