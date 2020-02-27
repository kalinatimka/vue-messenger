<template>
  <v-app>
    <v-card>
      <v-toolbar>
        <v-btn text to="/">Messages</v-btn>
        <v-btn text to="/new-message">New Message</v-btn>
        <v-spacer></v-spacer>
        <v-btn text to='/register'>Register</v-btn>
        <v-btn text>Login</v-btn>
      </v-toolbar>
    </v-card>
    <v-content>
      <router-view :key="$route.path" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>

<style>
</style>
