<template>
  <v-container>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Message from "{User.{{messageId}}}":</v-toolbar-title>
      </v-toolbar>
      <v-card-title>{{messageInfo}}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      messageInfo: ""
    };
  },
  props: {
    messageId: {
      type: Number,
      required: true
    }
  },

  mounted() {
    this.$store.dispatch("getMessageInfo", this.messageId).then(res => {
      this.messageInfo = res.data;
    });
  }
};
</script>