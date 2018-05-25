<template>
    <v-card>
        <v-snackbar
            :timeout="timeout"
            :color="color"
            v-model="snackbar"
            :multi-line="mode === 'multi-line'"
            >
            {{ alertInfo }}
            <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                snackbar: false,
                color: '',
                timeout: 2000,
                alertInfo: '',
                mode: ''
            }
        },

        created() {
            var self = this;
            self.initConfig();
        },

        methods: {
            initConfig() {
            }
        }
    }
</script>

<style>
</style>

