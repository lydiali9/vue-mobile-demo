<template>
    <v-container fluid class="reputation">
        <v-layout row wrap>
            <v-flex xs12 sm12 md12>
                <span class="sub-title"><p class="text-xs-center">查询企业相关信息</p></span>
                <v-text-field
                    placeholder="请输入企业/法人姓名/统一社会信用代码号"
                    class="mt-5"
                    v-model="keyword"
                    :rules="[() => keyword.length > 0 || 'This field is required']"
                    required
                ></v-text-field>
                <v-btn block color="blue darken-4 search-button"
                    @click="search"
                    :loading="loading"
                    :disabled="loading">
                    查询
                    <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                    </span>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {
                keyword: '',
                loader: null,
                loading: false
            }
        },

        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)
                this.loader = null
            }
        },

        created () {
            this.$store.commit('changeTitle', '查企业信用');
        },

        methods: {
            search() {
                let self = this;

                const {href} = self.$router.resolve({
                    name: 'ReputationList',
                    path: '/reputation-list',
                    query: { keyword: self.keyword }
                });
                window.open(href, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .reputation {
        .sub-title {
            color: $font_color !important;
            font-size: 1.25rem;
        }

        .search-button {
            color: $white;
        }

        input {
            font-size: 0.875rem !important;
        }
    }
</style>

