<template>
    <router-view/></router-view>
</template>

<script>
    import store from './store'
    export default {
        store,
        created () {
        }
    }
</script>

<style lang="scss">
    @import "assets/css/main.scss";
    @import "assets/css/color.scss";
</style>
