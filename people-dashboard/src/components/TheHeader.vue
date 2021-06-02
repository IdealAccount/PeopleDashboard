<template>
    <header class="app-header">
        <router-link v-if="$route.meta.prevRoute" class="route-back" :to="{name: 'dashboard'}">
            <v-icon src="arrow-back"/>
        </router-link>
        <div class="navigations">
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
            <div class="user-profile" v-if="isAuth">
                <router-link class="user-profile__avatar"
                             :to="{name: 'profile'}"
                             :style="{backgroundImage: `url('${require('@/assets/img/user-profile.jpg')}')`}"
                />
            </div>
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
            },
        },
        beforeRouteEnter(from, to, next) {
            console.log(from, to, next);
            next()
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
        z-index: 10;
        padding: 10px;
        font-size: 14px;
        background-color: #262626;
        .route-back {
            padding: 6px;
            font-size: 24px;
            color: #fff;
            border-radius: 50%;
            background-color: #fff;
        }
        .navigations {
            margin-left: auto;
            display: flex;
            align-items: center;
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
                width: 50px;
                height: 50px;
                border-radius: 6px;
                overflow: hidden;
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
}

</style>
