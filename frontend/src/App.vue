<template>
  <v-app>
    <v-content>
      <NewMessage/>
      <br>
      <Messages/>
    </v-content>
  </v-app>
</template>

<script>
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

export default {
  name: 'App',

  components: {
    Messages,
    NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
