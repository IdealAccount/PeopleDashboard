<template>
    <div :class="['dropdown', {'dropdown--absolute': absolute}, {'is-open': isOpen}]">
        <div class="dropdown-header" @click="$emit('toggle',isOpen = !isOpen)">
            <h3 v-if="title">{{title}}</h3>
            <v-close icon="arrow-down" relative/>
        </div>
        <transition name="show-in">
            <div v-if="isOpen" class="dropdown-content">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "VAccordion",
        props: {
            title: {
                type: String,
            },
            isOpened: {
                type: Boolean,
                default: () => false,
            },
            absolute: {
                type: Boolean,
                default: () => false
            }
        },
        data() {
            return {
                isOpen: this.isOpened,
            }
        },
        watch: {
            isOpened(val) {
                console.log(val)
                this.isOpen = this.isOpened
            }
        }
    }
</script>

<style scoped lang="scss">
    .dropdown {
        border: 1px solid #eec;
        &-header {
            padding: 15px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            button {
                display: flex;
                align-items: center;
                padding: 4px;
                transition: .2s ease;
            }
        }
        &-content {
            background-color: #fff;
            padding: 15px;
        }
        &--absolute {
            position: relative;
            .dropdown-content {
                position: absolute;
                z-index: 10;
                top: calc(100% - 1px);
                left: 0;
                width: 100%;
                border-radius: 0 0 6px 6px;
                border: 1px solid transparent;
            }
            &.is-open {
                .dropdown-header,
                .dropdown-content {
                    border-color: rgba(#000,.1);
                }
            }
        }
        &.is-open {
            .dropdown-header {
                border-radius: 6px 6px 0 0;
            }
            button {
                transform: rotateX(-180deg);
            }
        }
    }

</style>