<template>
    <div class="input-wrapper">
        <label v-if="title" @click="focusField">{{title}}</label>
        <div class="input-field">
            <input :value="value"
                   v-on="inputHandlers"
                   v-bind="$attrs"
                   ref="input"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: "VInput",
        inheritAttrs: false,
        props: {
            value: {},
            title: {
                type: String,
                default: () => null
            }
        },
        computed: {
            inputHandlers() {
                return {
                    ...this.$listeners,
                    input: this.inputHandler
                }
            }
        },
        methods: {
            focusField() {
                this.$refs.input.focus();
            },
            inputHandler(event) {
                const value = event.target.value;
                this.$emit("change", value);
                this.$emit("input", value);
            }
        }


    }
</script>

<style scoped lang="scss">
    .input-wrapper {
        label {
            display: inline-flex;
            padding: 4px 0;
            font-weight: 500;
            font-size: 14px;
            color: #58606e;
            cursor: pointer;
        }
        .input-field {
            input {
                width: 100%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                color: #58606e;
                transition: .2s ease-in;
                &:focus {
                    border-color: #ffc107;
                    outline: none;
                }
            }
        }
    }
</style>