<template>
    <header class="app-header">
        <div class="auth-controls">
            <a class="auth-link" href="javascript:void(0)">Sing Up</a>
            <a class="auth-link" href="javascript:void(0)">Sing In</a>
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
    export default {
        name: "VHeader",
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
