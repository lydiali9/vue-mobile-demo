<template functional>
        <v-dialog v-model="showLoading" full-width transition="" persistent id="loading">
            <v-progress-circular color="deep-purple darken-4" class="i-loading" indeterminate :size="60" :width="3"/>
        </v-dialog>
</template>

<script>
    export default {
        name: "i-loading",
        data: function () {
            return {
                showLoading: false,
            };
        },
        methods: {
            start() {
                this.showLoading = true;
            },
            stop() {
                this.showLoading = false;
            },
        },
    }
</script>

<style lang="scss" scoped>
    #loading .dialog {
        box-shadow: none !important;
    }

    .i-loading {
        position: absolute;
        left: 30%;
        top: 35%;
        transform: translate(50%, 50%);
    }
</style>
