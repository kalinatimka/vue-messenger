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
import axios from "axios";

export default {
  data() {
    return {
      message: ""
    };
  },

  methods: {
    submit() {
      axios.post("http://localhost:3000/messages", { message: this.message }).then(res => {
        this.$root.$emit('newMessage', res.data)
      });
    }
  }
};
</script>