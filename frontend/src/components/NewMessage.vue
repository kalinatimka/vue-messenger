<template>
  <v-container>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>New message</v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent>
        <v-container>
          <v-text-field label="Message" v-model="message" required @keyup.enter="submit"></v-text-field>
          <v-btn class="mr-4" @click="submit">submit</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },

  methods: {
    submit() {
      this.$store.dispatch("pushMessage", this.message);
      this.message = "";
    }
  }
};
</script>