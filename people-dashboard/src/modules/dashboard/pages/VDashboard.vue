<template>
    <div class="page-dashboard">
        <div class="grid-container">
            <dashboard-card v-for="(card) in userList"
                            :key="card.Id"
                            :card="card"
            />
        </div>
    </div>
</template>

<script>
    import {getters} from "../../../store";
    import UserList from '../../../stubs/user-list'

    export default {
        name: "VDashboard",
        components: {
            DashboardCard: () => import('../components/card/DashboardCard')
        },
        data() {
            return {
                userList: UserList
            }
        },
        computed: {
            isAuth() {
                return getters.isAuthUser
            }
        },
        mounted() {
            console.log(this.userList)
        }
    };
</script>

<style scoped lang="scss">
    .page-dashboard {
        padding: 20px 12px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
    }
</style>
