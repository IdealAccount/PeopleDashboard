<template>
    <div class="page-dashboard">
        <div class="grid-container">
            <v-card v-for="(card) in userList"
                            :key="card.Id"
                            :card="card"
                            @click="showCard(card)"
                            @update-card="updateList"
            />
        </div>
        <transition name="show-in">
            <popup-modal v-if="selectedCard" @close-popup="closePopup">
                <v-card :card="selectedCard" @update-card="updateList"/>
            </popup-modal>
        </transition>
    </div>
</template>

<script>
    import {getters} from "@/store";
    import UserList from '@/stubs/user-list';

    export default {
        name: "VDashboard",
        components: {
            'v-card': () => import('../components/card/Card'),
            PopupModal: () => import('@/modals/PopupModal')
        },
        data() {
            return {
                userList: UserList,
                selectedCard: null
            }
        },
        computed: {
            isAuth() {
                return getters.isAuthUser
            }
        },
        methods: {
            showCard(card) {
                this.selectedCard = card;
                document.body.style.overflow = 'hidden';
            },
            closePopup() {
                this.selectedCard = null
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
        padding: 20px 12px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        align-items: flex-start;
    }
</style>
