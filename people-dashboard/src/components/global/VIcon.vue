<template>
    <svg :class="`svg-icon icon-${src}`">
        <use v-bind="{ 'xlink:href': `${require('@/assets/icons/icons-sprite.svg')}#icon-${src}`}"></use>
    </svg>
</template>
<script>
    export default {
        name: "VIcon",
        props: {
            src: {
                type: String,
                required: true
            }
        },
    };
</script>
<style lang="scss">
    .svg-icon {
        width: 2rem;
        height: 2rem;
        display: inline-block;
        vertical-align: top
    }
</style>
