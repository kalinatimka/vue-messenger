<template>
    <v-container>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item v-for="message in messages" :key="message" @click="console.log('')">
                    <v-list-item-content>
                        <v-list-item-title v-text="message"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            messages: [
            ],
        }
    },

    mounted() {
        axios.get('http://localhost:3000/messages').then((req) => {
            this.messages = req.data;
        });
    },
}
</script>