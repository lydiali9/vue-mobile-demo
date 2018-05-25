<template>
    <v-layout row class="reputation-list">
        <v-flex xs12 sm12 md12>
            <v-card>
                <v-list three-line>
                    <template v-for="(item, index) in items">
                        <v-list-tile avatar class="row" :class="{'grey-bg': index % 2 == 0}">
                            <v-list-tile-content @click="toggle(item)">
                                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                                <v-list-tile-sub-title>工商注册号: {{ item.idCardOrOrgCode }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
                <v-list three-line>
                    <span class="sub-title" v-if="isShow"><p class="text-xs-center">你输入的关键字 {{keyword}} 暂无结果。</p></span>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {
                items: [],
                expno: '',
                name: '',
                isShow: false,
                keyword: ''
            }
        },

        watch: {
        },

        created () {
            let self = this;

            this.$store.commit('changeTitle', '查询结果');
            self.initialize();
        },

        methods: {
            getInfo(param) {
                this.loader = 'loading';

                return new Promise((resolve, reject) => {
                    this.$request.post(this.$store.state.getReputation, param)
                        .then((response) => {
                            if (response.status == '200' && response.data.code == '200') {
                                let result = response.data && response.data.data
                                    && !!response.data.data ? JSON.parse(response.data.data) : '';
                                resolve(result);
                            } else {
                                reject(response.data.msg);
                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            },

            initialize() {
                let self = this;
                let keyword = "";

                if(location.hash && !!location.hash) {
                    let hashArr = location.hash.split("?keyword=");
                    keyword = hashArr[hashArr.length - 1];
                }

                if(!keyword) {
                    return false;
                }

                let param = {
                    keyword: decodeURI(keyword)
                };

                self.getInfo(param)
                    .then((result) => {
                        if(result.data && result.data.results && result.data.results.length > 0) {
                            self.items = result.data.results;
                        } else {
                            self.isShow = true;
                            self.keyword = decodeURI(keyword);
                        }
                    })
                    .catch(error => {
                        let info = {
                            alertInfo: error ? error.toString() : '',
                            color: 'error'
                        };
                        self.$Snackbar(info);
                    });
            },

            toggle(item) {
                let self = this;

                this.expno = localStorage.setItem("reputation-item", JSON.stringify(item));
                const {href} = self.$router.resolve({
                    name: 'ReputationDetail',
                    path: '/reputation-detail'
                });
                window.open(href, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .reputation-list {
        .sub-title {
            color: $font_color !important;
            font-size: 1.20rem;
        }

        .card {
            box-shadow: none;
        }

        .row {
            width: 100%;
            height: 90px;
            padding: 10px 0;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            color: #444;
            background-color: #fff;
        }

        .grey-bg {
            background-color: #eee;
        }
    }
</style>

