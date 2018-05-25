<template>
    <v-container fluid class="expressage">
        <v-layout row wrap>
            <v-flex xs12 sm12 md12>
                <v-text-field
                    solo
                    label="请输入快递单号"
                    mt-5
                    class="text-field"
                    v-model="num"
                    :rules="[() => num.length > 0 || 'This field is required']"
                    required
                ></v-text-field>
                <v-btn block mt-5 class="search-button"
                    @click="search">
                    查询
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
                num: '',
                loader: null
            }
        },

        watch: {
        },

        created () {
            this.$store.commit('changeTitle', '查快递');
        },

        methods: {
            getInfo() {
                let self = this;

                return new Promise((resolve, reject) => {
                    self.$request.post(this.$store.state.getExpressage, {num: this.num})
                        .then((response) => {
                            if (response.status == '200' && response.data.code == '200') {
                                resolve(response.data.content);
                            } else {
                                reject(response.data.msg);
                            }
                        })
                        .catch((error) => {
                            self.$ILoading.stop();
                            reject(error);
                        });
                });
            },

            search() {
                let self = this;
                self.$ILoading.start();

                self.getInfo()
                    .then((result) => {
                        localStorage.setItem("expressage-list", JSON.stringify(result));
                        localStorage.setItem("expressage-expno", this.num);

                        this.$router.push({path: '/expressage-list'});
                    }).catch(error => {
                        self.$ILoading.stop();
                        let info = {
                            alertInfo: error ? error.toString() : '',
                            color: 'error'
                        };
                        this.$Snackbar(info);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .expressage {
        .search-button {
            color: $white;
            background: $serach_button_color !important;
            border-radius: 0.5rem;
            margin-top: 50%;
            height: 2.875rem;
        }

        .text-field {
            border-radius: 0.5rem !important;
            background: $input_backgroud_color;
            margin: 0.75rem;
        }

        .input-group {
            width: 96%;
        }
    }
</style>

