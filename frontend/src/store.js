import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
  },

  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    newMessage(state, message) {
      state.messages.push(message);
    }
  },

  actions: {
    getMessages({ commit }) {
      axios.get("http://localhost:3000/messages").then(res => {
        commit('setMessages', res.data);
      });
    },

    pushMessage({commit}, message) {
      axios.post("http://localhost:3000/messages", { message: message }).then(res => {
        commit('newMessage', res.data);
      });
    }
  }
});