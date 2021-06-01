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
            height: 18px;
            border-radius: 4px;
            overflow: hidden;
            background: #c6c6c6;
            &__item {
                height: 100%;
                border-radius: 0 5px 5px 0;
                transform: scaleX(1.04);
            }
        }
        &-box {
            display: grid;
            grid-template-columns: repeat(4, .3fr);
            grid-gap: 5px;
        }
    }
</style>