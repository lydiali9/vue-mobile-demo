<template>
    <v-footer color="grey lighten-1">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12>
                &copy; {{ new Date().getFullYear() }}
                </v-flex>
            </v-layout>
        </v-container>
    </v-footer>
</template>

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {

            }
        },

        created () {
            let self = this;
        },

        methods: {

        }
    }
</script>


<style>

</style>
