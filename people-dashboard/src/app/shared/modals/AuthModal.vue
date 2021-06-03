<template>
    <modal-wrapper @close="closeModal">
        <h2 style="text-transform: capitalize" slot="header">{{method}}</h2>
        <div class="modal-auth">
            <v-form @submit="formHandler"  id="form-auth" :loading="loading">
                <transition name="slide-out" mode="out-in">
                    <div class="input-group" :key="method">
                        <v-input :autocomplete="autocompleteField" title="Email" type="email" v-model="email"/>
                        <v-input :autocomplete="autocompleteField" title="Password" type="password" v-model="password"/>
                    </div>
                </transition>
            </v-form>
            <div class="form-controls">
                <v-button style="width: 150px" type="submit" title="Send" form="form-auth" :loading="loading"/>
                <p>
                    go to
                    <span style="text-transform: capitalize"
                          @click="method = invertedAuthMethod"
                    >
                            {{invertedAuthMethod}}
                        </span>
                </p>
            </div>
        </div>
    </modal-wrapper>
</template>

<script>
    import ModalWrapper from "./ModalWrapper";
    import {actions} from "../../store";
    import {modalMixin} from "./modal-mixin";

    export default {
        name: "AuthModal",
        components: {
            ModalWrapper
        },
        mixins: [modalMixin],
        data() {
            return {
                method: this.modalData.method,
                email: "",
                password: "",
                loading: false,
            }
        },
        watch: {
            method() {
                this.email = '';
                this.password = '';
            }
        },
        computed: {
            autocompleteField() {
                return this.method === 'registration' ? 'off' : ''
            },
            invertedAuthMethod() {
                return this.method === 'login' ? 'registration' : 'login';
            }
        },
        methods: {
            async formHandler() {
                this.loading = true
                actions.auth(this.method, this.email, this.password)
                .then(() => {
                    this.closeModal()
                })
                .catch(() => {
                    this.loading = false
                })

            },
        }
    }
</script>

<style scoped lang="scss">
    .modal-auth {
        width: 550px;
        padding: 25px 15px;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        h2 {
            margin-bottom: 20px;
        }
        .input-group {
            margin-bottom: 25px;
        }
        form {
            padding: 0 30px;
            overflow: hidden;
        }
        .form-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px;
            p {
                font-size: 14px;
                color: #6e6e6e;
            }
            span {
                margin-left: 15px;
                cursor: pointer;
                font-weight: 700;
                font-size: 18px;
                color: rgba(10, 14, 95, 0.55);
                transition: .2s ease;
                &:hover {
                    color: rgb(10, 14, 95,);
                }
            }
        }
    }
</style>