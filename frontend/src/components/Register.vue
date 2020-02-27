<template>
  <v-container>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent>
        <v-container>
          <v-text-field label="User name" v-model="name" required @keyup.enter="submit"></v-text-field>
          <v-text-field label="Password" v-model="password" required @keyup.enter="submit"></v-text-field>
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
      name: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('register', {name: this.name, password: this.password});
    }
  },
}
</script>