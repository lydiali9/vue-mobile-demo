<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
            <v-card ref="form">
                <v-card-text>
                  <v-text-field ref="title" v-model="editedItem.title" :rules="rules.title" label="Title" required>
                  </v-text-field>

                  <v-text-field ref="Start time" v-model="editedItem.title" :rules="rules.title" label="Title" required>
                  </v-text-field>

                  <v-text-field ref="title" v-model="editedItem.title" :rules="rules.title" label="Title" required>
                  </v-text-field>

                  <v-text-field ref="title" v-model="editedItem.title" :rules="rules.title" label="Title" required>
                  </v-text-field>

                  <v-text-field ref="title" v-model="editedItem.title" :rules="rules.title" label="Title" required>
                  </v-text-field>

                  <v-text-field ref="title" v-model="editedItem.title" :rules="rules.title" label="Title" required>
                  </v-text-field>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions>
                    <v-btn flat>Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-slide-x-reverse-transition>
                        <v-tooltip
                          v-if="formHasErrors"
                          left
                        >
                          <v-btn
                            slot="activator"
                            icon
                            class="my-0"
                            @click="resetForm"
                          >
                            <v-icon>refresh</v-icon>
                          </v-btn>
                          <span>Refresh form</span>
                        </v-tooltip>
                    </v-slide-x-reverse-transition>
                    <v-btn color="primary" flat @click="submit">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import crypto from "crypto";

    export default {
        data: function () {
            return {
                editedItem: {
                    title: '',
                },
                rules: {
                    title: [
                        v => !!v || 'This field is required'
                    ],
                    categories: [
                        v => !!v || 'You must choose at least one'
                    ],
                    product_limit: [
                        v => !!v || 'You must choose at least one'
                    ]
                },
            }
        },

        created () {
            let self = this;

            self.items = [];
            self.$store.commit('changeTitle', '活动详情');
            self.initialize();
        },

        methods: {
            initialize() {
                let self = this;
                let id = "";

                if(location.hash && !!location.hash) {
                    let hashArr = location.hash.split("?id=");
                    id = hashArr[hashArr.length - 1];
                }

                if(!id) {
                    return false;
                }

                let params = {
                    src: 'inveno',
                    eid: id
                };
                self.getInfoDetail(params)
                    .then((result) => {
                        debugger;
                        let data = JSON.parse(result);
                        if(data && data.result) {
                            console.log(data.result)
                        }
                    }).catch(error => {
                        let info = {
                            alertInfo: error ? error.toString() : '',
                            color: 'error'
                        };
                        self.$Snackbar(info);
                    });
            },

            getInfoDetail(params) {
                let self = this;

                return new Promise((resolve, reject) => {
                    self.$request.post(self.$store.state.getActivity, params)
                        .then((response) => {
                            if (response.status == '200' && response.data.code == '200') {
                                resolve(response.data.content);
                            } else {
                                reject(response.data.msg)
                            }
                        }).catch((error) => {
                            reject(error);
                        });
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/color.scss';

    .activity {
        .card {
            box-shadow: none;
        }

        .list__tile__sub-title {
            font-size: 0.75rem;
        }

        .list__tile {
            font-size: 0.875rem;
        }

        .container {
            padding: 16px !important;
        }

        @media only screen and (max-width: 599px) {
            .container {
                padding: 16px !important;
            }
        }

        .button {
            float: right;
        }
        .card-list div:first{
            border-bottom: 1px solid #c5c2c2;
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

        .card {
            position: initial !important;
        }

        ._v-container[data-v-ecaca2b0] {
            width: 100%;
            height: 85.5% !important;
            position: absolute;
            top: 60px;
            left: 0;
        }
    }
</style>
