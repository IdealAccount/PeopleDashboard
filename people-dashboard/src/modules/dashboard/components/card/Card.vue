<template>
    <div class="card">
        <div class="card-preview"
             :style="{backgroundImage: `url(${card.Photo})`}"
             @click.stop="showCard"
        >
            <img v-if="!card.Photo"
                 src="http://placehold.it/280x158"
            />
            <div class="card-preview__tags">
                <div v-for="(tag, index) of card.Tags"
                     :key="index"
                     :style="{backgroundColor: `#${tag.Color}`}"
                >
                    {{tag.Name}}
                </div>
            </div>
        </div>
        <div class="card-inner">
            <button class="card-settings-btn" v-if="isAuth" @click="toggleEditing">
                <v-icon :src="editingMode ? 'arrow-undo' : 'settings'"/>
            </button>

            <card-settings v-if="editingMode"
                           :card="card"
                           @update-card="updateCard"
                           @cancel="editingMode = false"
            />
            <template v-else>
                <div class="card-header">
                    <h3 class="card-header__name">{{card.Name}}</h3>
                    <span class="card-header__title">{{card.Title}}</span>
                </div>
                <div class="card-body">
                    <div class="card-body__row">
                        <card-progress-bar :values="card.Profit" label="Profit" :max-value="1000" prefix="+ $"/>
                    </div>
                    <div class="card-body__row">
                        <card-progress-bar :values="card.Attention" label="Attention" postfix="h"/>
                    </div>
                    <div class="card-body__row">

                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import CardProgressBar from "./CardProgressBar";
    import CardSettings from "./CardSettings";
    import {getters} from "../../../../store";

    export default {
        name: "DashboardCard",
        components: {
            CardProgressBar,
            CardSettings
        },
        props: {
            card: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                editingMode: false,
            }
        },
        computed: {
            isAuth() {
                return getters.isAuthUser
            }
        },
        methods: {
            toggleEditing() {
                this.editingMode = !this.editingMode;
            },
            showCard() {
                this.editingMode = false;
                this.$emit('click')
            },
            updateCard(card) {
                this.editingMode = false;
                this.$emit('update-card', card)
            }

        }
    }
</script>

<style scoped lang="scss">
    .card {
        position: relative;
        box-shadow: 0 0 3px rgba(0, 0, 0, .3);
        border-radius: 6px;
        overflow: hidden;
        transition: .2s ease;
        background: #fff;
        min-width: 300px;
        &:hover {
            box-shadow: 0 3px 8px 2px rgba(0, 0, 0, .15);
        }
        &-preview {
            position: relative;
            padding-top: 56.2%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
            img {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                left: 0;
                object-fit: cover;
            }
            &__tags {
                position: absolute;
                right: 0;
                top: 12px;
                cursor: pointer;
                div {
                    padding: 5px 15px 5px 10px;
                    transform: translateX(30%);
                    transition: transform .2s ease-in;
                    border-radius: 6px 0 0 6px;
                    color: #fff;
                    margin-bottom: 2px;
                    text-align: center;
                    &:hover {
                        transform: translateX(0);
                    }
                }
            }
        }
        &-inner {
            position: relative;
            padding: 12px 8px 20px;
        }
        &-header {
            padding-bottom: 8px;
            border-bottom: 2px solid rgba(55, 55, 55, .16);
            margin-bottom: 20px;
            &__name,
            &__title {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                word-break: break-word;
            }
            &__name {
                padding-right: 40px;
                margin-bottom: 10px;

                font-size: 20px;
                font-weight: 700;

                color: #58606e;

                line-height: 24px;
                max-height: 48px;
                -webkit-line-clamp: 2;
            }
            &__title {
                color: #58606e;
                line-height: 20px;
                max-height: 57px;
                -webkit-line-clamp: 3;
            }

        }
        &-settings-btn {
            position: absolute;
            top: 12px;
            right: 8px;
            padding: 2px;
            &:after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 100%;
                border-radius: 50%;
                background-color: rgba(#000, .1);
                transform: scale(.5);
                opacity: 0;
                transition: .2s ease;
            }
            &:hover:after {
                transform: scale(1.4);
                opacity: 1;
            }
            .svg-icon {
                font-size: 24px;
            }
        }
        &-body {
            &__row:not(:last-child) {
                margin-bottom: 22px;
            }
        }
    }
</style>