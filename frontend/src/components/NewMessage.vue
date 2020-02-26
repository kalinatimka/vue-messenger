<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field label="Message" v-model="message" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </v-form>
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
      this.$store.dispatch('pushMessage', this.message);
    }
  }
};
</script>