<template>
  <v-container>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="(message, id) in messages" :key="message" :to="{name: 'messageInfo', params: {messageId: id}}">
            {{message}}
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState({
      messages: state => state.messages,
    }),
  },
  
  mounted() {
    this.$store.dispatch('getMessages');
  }
};
</script>