<template>
    <div class="modal-wrapper">
        <div class="modal-bg"></div>
        <div class="modal-inner">
            <div class="modal-header">
                <h2 v-if="title">{{title}}</h2>
                <v-icon src="close"/>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalWrapper",
        props: {
            title: String,
        }
    }
</script>

<style scoped lang="scss">

</style>