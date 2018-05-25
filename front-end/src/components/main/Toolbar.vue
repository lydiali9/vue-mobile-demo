<template>
    <v-toolbar class="toolbar-color">
        <v-container grid-list-md text-xs-left>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
                </v-flex>
            </v-layout>
        </v-container>
    </v-toolbar>
</template>

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {

            }
        },

        computed: {
            toolbarTitle() {
                return this.$store.state.toolbar.toolbar
            }
        },

        created () {
            let self = this;
        },

        methods: {

        }
    }
</script>


<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .toolbar-color {
        background-color: $header_backgroud;
        color: $header_font_color;
    }

</style>
