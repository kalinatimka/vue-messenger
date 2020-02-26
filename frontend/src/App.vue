<template>
  <v-app>
    <v-card>
      <v-toolbar>
        <v-btn text>Messages</v-btn>
        <v-spacer></v-spacer>
        <v-btn text>Login</v-btn>
      </v-toolbar>
    </v-card>
    <v-content>
      <NewMessage />
      <br />
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

export default {
  name: "App",

  components: {
    Messages,
    NewMessage
  },

  data: () => ({
    //
  })
};
</script>

<style>
</style>
