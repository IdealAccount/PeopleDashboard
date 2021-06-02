<template>
    <button :class="[
                'v-button',
                `v-button--${btnStyle}`,
                size,
                {full},
            ]"
            :type="type"
            v-bind="$attrs"
            @click="actionHandler"
    >
        <template v-if="title">{{title}}</template>
        <slot v-else></slot>
    </button>
</template>

<script>
    export default {
        name: "VButton",
        inheritAttrs: false,
        props: {
            type: {
                type: String,
                default: () => "button"
            },
            btnStyle: {
                type: String,
                default: () => "primary"
            },
            size: {
                type: String,
                default: () => "md"
            },
            full: {
                type: Boolean,
                default: () => false
            },
            title: {
                type: String,
                default: () => ''
            }
        },
        methods: {
            actionHandler(event) {
                console.log(event)
                const type = this.type === "submit" ? "submit" : "click";
                this.$emit(type, event);
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5em .8em;
        color: #222;
        border-radius: 4px;
        border: 1px solid transparent;
        white-space: nowrap;
        transition: 0.3s ease;
        &.xs {
            font-size: 12px;
        }
        &.sm {
            font-size: 14px;
        }
        &.md {
            font-size: 16px;
        }
        &.lg {
            font-size: 20px;
        }
        &.full {
            width: 100%;
        }
        &--primary {
            background-color: #00bfff;
            color: #fff;
        }
        &--secondary {
            color: #989898;
            border-color: #989898;
        }
        &--danger {
            color: #ff000c;
            border-color: #ff000c;
        }
        &:disabled {
            pointer-events: none;
            background-color: #ccc;
        }
    }
</style>