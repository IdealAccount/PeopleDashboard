<template>
    <div class="chart">
        <div :class="`chart-${chartType}`">
            <template v-if="items">
                <div class="chart__item" :class="`chart-${chartType}__item`" v-for="(item, index) of indicators"
                     :key="index"
                     :style="[
                     {width: item.value},
                     {backgroundColor: item.color},
                     {zIndex: (indicators.length - index)}
                 ]"
                ></div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardBar",
        props: {
            chartType: {
              type: String,
              default: () => 'base'
            },
            items: {
                type: Array,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
        },
        computed: {
            indicators() {
                const convertToPercent = val => ((val / this.total * 100)).toFixed(2) + '%';

                return this.items.map(item => {
                    return {
                        value: convertToPercent(item.value),
                        color: `#${item.color}`
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .chart {
        overflow: hidden;
        &__item {
            transition: width .4s ease-in;
        }
        &-base {
            height: 100%;
            &__item {
                height: 20px;
            }
        }
        &-bar {
            display: flex;
            height: 16px;
            padding: 2px 4px 2px 0;
            border-radius: 0 5px 5px 0;
            overflow: hidden;
            background: #fff;
            box-shadow: inset 0 2px 2px rgba(#000, .1),inset 0 -2px 2px rgba(#000, .1);
            &__item {
                height: 100%;
                border-radius: 0 5px 5px 0;
                transform: scaleX(1.04);
                box-shadow: 1px 0 2px 1px rgba(#000, .15);
            }
        }
        &-box {
            display: grid;
            grid-template-columns: repeat(4, .25fr);
            grid-gap: 5px;
        }
    }
</style>