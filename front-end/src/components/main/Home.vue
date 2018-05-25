<template>
    <v-app>
        <v-toolbar/>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <!-- <v-footer/> -->
    </v-app>
</template>


<script>
    import vToolbar from './Toolbar.vue'
    // import vFooter from './Footer.vue'

    export default {
        components:{
            vToolbar
            // vFooter
        }
    }
</script>

<style>
</style>
