<template>
    <div class="page-dashboard">
        <v-loader v-if="loading"/>
        <template v-else>
            <div class="dashboard-filter">
                <v-accordion title="Dashboard Settings"
                             absolute
                             :is-opened="filterIsOpen"
                             @toggle="filterIsOpen = $event"
                >
                    <v-form @submit="fetchUserList">
                        <div class="form-group" style="margin-bottom: 20px;">
                            <v-input title="Page"
                                     type="number"
                                     v-model="page"
                                     class="form-input"
                            />
                            <v-input title="Per page"
                                     type="number"
                                     v-model="pp"
                                     class="form-input"
                            />
                        </div>
                        <div class="form-group">
                            <v-button title="Upload" type="submit"/>
                            <v-button title="Reset" btn-style="danger" @click="resetFilter"/>
                            <v-button title="Cancel" btn-style="secondary" style="margin-left: auto" @click="filterIsOpen = false"/>
                        </div>
                    </v-form>
                </v-accordion>
            </div>
            <div class="grid-container" v-if="userList">
                <v-card v-for="(user) in userList"
                        :key="user.Id"
                        :card="user"
                        @click="showCard(user.Id)"
                        @update-card="updateList"
                />
            </div>
            <transition name="fade-out">
                <popup-modal v-if="popupIsOpen" :loading="!selectedCard" @close-popup="closePopup">
                    <v-card :card="selectedCard" @update-card="updateList"/>
                </popup-modal>
            </transition>
        </template>
    </div>
</template>

<script>
    import VAccordion from "@/components/VAccordion";
    import {getters} from "@/store";
    import {api} from "../services";

    export default {
        name: "VDashboard",
        components: {
            'v-card': () => import('../components/card/Card'),
            PopupModal: () => import('@/modals/PopupModal'),
            VAccordion,
        },
        data() {
            return {
                pp: 5,
                page: 1,
                userList: [],
                popupIsOpen: false,
                selectedCard: null,
                loading: true,
                filterIsOpen: false
            }
        },
        created() {
            this.paramsFromURL()
            this.fetchUserList()
        },
        watch: {
            filterOptions: "pushStateOptions"
        },
        computed: {
            isAuth() {
                return getters.isAuthUser
            },
            filterOptions: {
                get() {
                    return {
                        page: this.page,
                        pp: this.pp
                    }
                },
                set({pp = '',page = ''}) {
                    this.pp = pp;
                    this.page = page;
                }
            }
        },
        methods: {
            fetchUserList() {
                api.getUsers(this.filterOptions).then(data => {
                    this.userList = data;
                }).finally(() => this.loading = false)
            },
            showCard(userId) {
                this.popupIsOpen = true;
                api.getUser(userId).then(data => {
                    this.selectedCard = data;
                }).catch(() => {
                    this.closePopup();
                })
                document.body.style.overflow = 'hidden';
            },
            closePopup() {
                this.popupIsOpen = false;
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
            },
            pushStateOptions({page, pp}) {
                let options = '';
                if (page || pp) {
                    options = `?page=${page}&pp=${pp}`
                }
                history.pushState(
                    null,
                    document.title,
                    `${this.$route.path}${options}`
                )
            },
            paramsFromURL() {
                // Нативный вариант
            /*    const params = Object.fromEntries(
                    new URL(window.location).searchParams.entries()
                );*/
                const params = this.$route.query;
                const VALID_URL_KEYS = ['pp', 'page'];

                VALID_URL_KEYS.forEach(key => {
                    if (params[key]) {
                        this[key] = params[key]
                    }
                })
            },
            resetFilter() {
                this.filterOptions = {}
                this.pushStateOptions(this.filterOptions)
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
    .dashboard-filter {
        max-width: 400px;
        margin-bottom: 25px;
        form {
            .form-group {
                display: flex;
                gap: 10px;
            }

        }
    }
</style>
