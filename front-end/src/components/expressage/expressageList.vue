<template>
    <v-layout row class="expressage-list">
        <v-flex xs12 sm12>
            <v-card>
                <v-list three-line>
                    <span class="sub-title"><p class="text-xs-center">订单号： {{expno}}</p></span>
                    <span class="sub-title"><p class="text-xs-center">{{name}}</p></span>
                    <template v-for="(item, index) in items">
                        <v-list-tile avatar class="row" :class="{'grey-bg': index % 2 == 0}">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.time }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.desc }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<!-- <template>
    <v-layout row class="activity">
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-list two-line>
                    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="scrolling">
                        <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
                            <v-list-tile avatar :key="item.title" @click="toggle(item)">
                                <v-list-tile-avatar>
                                    <img :src="item.logo">
                                </v-list-tile-avatar>
                              <v-list-tile-content>
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{item.address}}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{item.startdate}} - {{item.enddate}}</v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                        </div>
                    </scroller>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template> -->

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {
                items: [],
                expno: '',
                name: ''
            }
        },

        watch: {
        },

        created () {
            let self = this;

            this.$store.commit('changeTitle', '快递查询结果');
            self.initialize();
        },

        methods: {
            initialize() {
                this.items = [];
                let data = localStorage.getItem("expressage-list");
                let company = !!data ? (JSON.parse(data) && JSON.parse(data).company) ? JSON.parse(data).company : '' : '';
                let items = !!data ? (JSON.parse(data) && JSON.parse(data).info
                    && JSON.parse(data).info.context && JSON.parse(data).info.context.length > 0 ? JSON.parse(data).info.context : []) : [];

                items.forEach((item) => {
                    let time = this.$utils.formatDate(new Date(item.time * 1000), 'yyyy-MM-dd hh:mm:ss');
                    this.$set(item, 'time', time);

                    this.items.push(item);
                });

                this.name = !!company ? company.fullname : '';
                this.expno = localStorage.getItem("expressage-expno");
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .expressage-list {
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

