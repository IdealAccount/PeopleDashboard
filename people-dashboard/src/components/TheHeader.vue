<template>
    <header class="app-header">
        <div class="auth-controls">
            <a v-if="isAuth"
               class="auth-link"
               href="javascript:void(0)"
               @click="logout"
            >Log Out</a>
            <template v-else>
                <a class="auth-link"
                   href="javascript:void(0)"
                   @click="register"
                >
                    Sing Up
                </a>
                <a class="auth-link"
                   href="javascript:void(0)"
                   @click.prevent="login"
                >
                    Sing In
                </a>
            </template>
        </div>
        <div class="user-profile">
            <router-link class="user-profile__avatar"
                         :to="{name: 'profile'}"
                         :style="{backgroundImage: `url('${require('@/assets/img/user-profile.jpg')}')`}"
            />
        </div>
    </header>
</template>

<script>
    import {actions, getters} from "../store";

    export default {
        name: "VHeader",

        computed: {
            isAuth() {
                return getters.isAuthUser
            }
        },
        methods: {
            // arrow fn in that
            register() {

            },
            login() {
                actions.login('my-token')
            },
            logout() {
                actions.logout()
            }
        }
    };
</script>

<style scoped lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 10;
        padding: 10px;
        font-size: 14px;
        background-color: #262626;
        .auth-controls {
            padding: 0 10px;
            .auth-link {
                color: #fff;
                padding: 8px 12px;
                font-weight: 500;
                transition: .2s ease;
                &:hover {
                    color: #ffc107;
                }
            }
        }
        .user-profile {
            position: relative;
            /*padding-top: 5%;*/
            width: 50px;
            height: 50px;
            &__avatar {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-position: center;
                background-size: cover;
            }
        }
}

</style>
