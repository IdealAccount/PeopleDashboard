<template>
    <div class="popup">
        <button type="button" class="popup-close" @click="$emit('close-popup')">
            <v-icon src="close"/>
        </button>
        <div class="popup-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopupModal"
    }
</script>

<style scoped lang="scss">
    .popup {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, .8);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
        &-close {
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 10px;
            background-color: rgba(#fff, .7);
            border-radius: 50%;
            transition: background-color .2s ease;
            &:hover {
                background-color: #fff;
            }
        }
        &-body {
            max-width: 550px;
            width: 100%;
            box-shadow: 0 3px 10px -0.5px rgb(0 0 0 / 20%);
            max-height: calc(100vh - 100px);
        }
    }
</style>