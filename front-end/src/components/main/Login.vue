<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <v-card>
                    <v-card-text>
                        <v-form>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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
