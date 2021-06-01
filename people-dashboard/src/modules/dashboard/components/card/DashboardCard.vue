<template>
    <div class="card">
        <div class="card-preview" :style="{backgroundImage: `url(${card.Photo})`}">
            <img v-if="!card.Photo" src="http://placehold.it/280x158" />
        </div>
        <div class="card-inner">
            <div class="card-header">
                <h3 class="card-header__name">{{card.Name}}</h3>
                <span class="card-header__title">{{card.Title}}</span>
            </div>
            <div class="card-body">
                <div class="card-body__row">
                    <progress-bar :values="card.Profit" label="Profit" :max-value="1000" prefix="+ $"/>
                </div>
                <div class="card-body__row">
                    <progress-bar :values="card.Attention" label="Attention" postfix="h"/>
                </div>
                <div class="card-body__row"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from "./ProgressBar";

    export default {
        name: "DashboardCard",
        components: {
            ProgressBar
        },
        props: {
            card: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        position: relative;
        cursor: pointer;
        box-shadow: 0 0 3px rgba(0,0,0,.3);
        border-radius: 6px;
        overflow: hidden;
        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
            transition: background .2s ;
        }
        &:hover:after {
            content: "SHOW MORE";
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;

            font-size: 24px;
            font-weight: 300;
            color: #ffffff;
            background: rgba(#262626,.97);
            letter-spacing: 2px;
        }
        &-preview {
            position: relative;
            padding-top: 56.2%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            img {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                left: 0;
                object-fit: cover;
            }
        }
        &-inner {
            padding: 12px 8px 20px;
        }
        &-header {
            padding-bottom: 12px;
            border-bottom: 2px solid rgba(55,55,55,.16);
            margin-bottom: 20px;
        }
        &-body {
            &__row:not(:last-child) {
                margin-bottom: 22px;
            }
        }
    }
</style>