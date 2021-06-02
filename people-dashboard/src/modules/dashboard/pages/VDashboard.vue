<template>
    <div class="page-dashboard">
        <v-loader v-if="loading"/>
        <template v-else>
            <div class="grid-container" v-if="userList">
                <v-card v-for="(user) in userList"
                        :key="user.Id"
                        :card="user"
                        @click="showCard(user.Id)"
                        @update-card="updateList"
                />
            </div>
            <transition name="fade-out">
                <popup-modal v-if="isOpen" :loading="!selectedCard" @close-popup="closePopup">
                    <v-card :card="selectedCard" @update-card="updateList"/>
                </popup-modal>
            </transition>
        </template>
    </div>
</template>

<script>
    import {getters} from "@/store";
    import {api} from "../services";

    export default {
        name: "VDashboard",
        components: {
            'v-card': () => import('../components/card/Card'),
            PopupModal: () => import('@/modals/PopupModal')
        },
        data() {
            return {
                userList: [],
                isOpen: false,
                selectedCard: null,
                loading: false,
            }
        },
        created() {
            this.loading = true;
            api.getUsers(1, 20).then(data => {
                this.userList = data;
            }).finally(() => this.loading = false)
        },
        computed: {
            isAuth() {
                return getters.isAuthUser
            }
        },
        methods: {
            showCard(userId) {
                this.isOpen = true;
                api.getUser(userId).then(data => {
                    this.selectedCard = data;
                }).catch(() => {
                    this.closePopup();
                    alert('Ошибка')
                })
                document.body.style.overflow = 'hidden';
            },
            closePopup() {
                this.isOpen = false;
                this.selectedCard = null;
                document.body.style.overflow = '';
            },
            updateList(card) {
                const cardIndex = this.userList.findIndex(el => el.Id === card.Id);
                this.$set(this.userList, cardIndex, card);
                if (this.selectedCard) {
                    this.selectedCard = card;
                }
                // this.userList.splice(index, 1, card);

            }
        }
    };
</script>

<style scoped lang="scss">
    .page-dashboard {
        padding: 20px 10px;
        @media (min-width: 768px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(286px, 1fr));
        gap: 20px;
        align-items: flex-start;
    }
</style>
