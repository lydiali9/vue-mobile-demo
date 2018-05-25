<template>
    <v-layout row class="reputation-list">
        <v-flex xs12 sm12 md12>
            <div>
                <v-toolbar color="cyan" dark tabs>
                    <v-tabs v-model="tab" color="cyan" grow>
                        <v-tabs-slider color="yellow"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </v-toolbar>
                <v-tabs-items v-model="tab">
                      <v-tab-item v-for="item in items" :key="item">
                            <v-card flat v-if="tab == 0">
                                <v-card-text >
                                    <v-layout row>
                                        <v-flex xs5 sm3 md2>
                                            <v-subheader>工商注册号：</v-subheader>
                                        </v-flex>
                                        <v-flex xs7 sm9 md10>
                                            <v-subheader>{{creditCode}}</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs5 sm3 md2>
                                            <v-subheader>法人信息：</v-subheader>
                                        </v-flex>
                                        <v-flex xs7 sm9 md10>
                                            <v-subheader>{{legalPerson}}</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs5 sm3 md2>
                                            <v-subheader>成立日期：</v-subheader>
                                        </v-flex>
                                        <v-flex xs7 sm9 md10>
                                            <v-subheader>{{esdate}}</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs5 sm3 md2>
                                            <v-subheader>企业类型：</v-subheader>
                                        </v-flex>
                                        <v-flex xs7 sm9 md10>
                                            <v-subheader>{{enttype}}</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                            <v-card flat v-if="tab == 1">
                                <v-card-text >111</v-card-text>
                            </v-card>
                            <v-card flat v-if="tab == 2">
                                <v-card-text >222</v-card-text>
                            </v-card>
                            <v-card flat v-if="tab == 3">
                                <v-card-text >333</v-card-text>
                            </v-card>
                            <v-card flat v-if="tab == 4">
                                <v-card-text >4444</v-card-text>
                            </v-card>
                            <v-card flat v-if="tab == 5">
                                <v-card-text >555</v-card-text>
                            </v-card>
                      </v-tab-item>
                </v-tabs-items>
              </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {
                tab: null,
                items: [
                    '信息概况', '行政许可', '行政处罚', '重点黑名单', '守信红名单', '黑名单'
                ],
                creditCode: '',
                legalPerson: '',
                esdate: null,
                enttype: ''
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
            initialize() {
                let self = this;

                let item = localStorage.getItem("reputation-item");
                item = JSON.parse(item);

                let param = {
                    encryStr: item.encryStr
                }
                self.getCreditInfoDetail(param)
                    .then()
                    /*.then(getPubPermissionsName())
                    .then(getPubPenaltyName())
                    .then(getRecordParam( {creditType: 2} ))
                    .then(getRecordParam( {creditType: 4} ))
                    .then(getRecordParam( {creditType: 6} ))*/
                    .catch(error => {
                        let info = {
                            alertInfo: error ? error.toString() : '',
                            color: 'error'
                        };
                        self.$Snackbar(info);
                    });
            },

            getCreditInfoDetail(param) {
                let self = this;

                return new Promise((resolve, reject) => {
                    this.$request.post(this.$store.state.getPubPermissionsName, param)
                        .then((response) => {
                            if (response.status == '200' && response.data.code == '200') {
                                debugger;
                                let result = response.data && response.data.data
                                    && !!response.data.data ? JSON.parse(response.data.data).result : '';

                                if(!!result) {
                                    self.creditCode = result.creditCode;
                                    self.legalPerson = result.legalPerson;
                                    self.esdate = result.esdate;
                                    self.enttype = result.enttype;
                                }
                            } else {
                                reject(response.data.msg);
                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .reputation-list {
        margin: -24px !important;

        .container.fluid {
            max-width: 100%;
            padding: 0 !important;
        }
    }
</style>

