<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field label="Message" required></v-text-field>
                </v-col>
            </v-row>
            <v-btn class="mr-4" @click="submit">submit</v-btn>
        </v-form>
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