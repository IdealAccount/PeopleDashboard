<template>
    <div class="modal-list">
        <component v-for="({modalName, data}, index) of modalList"
                   :key="index"
                   :is="require(`./${modalName}Modal`).default"
                   :style="{zIndex: 1000 + index }"
                   :modal-data="data"
                   :modal-name="modalName"
        />
    </div>
</template>
<script>
    import {getters} from "./modals-state";

    export default {
        name: "VModals",
        computed: {
            modalList() {
                return getters.modals
            }
        }
    }
</script>

<style scoped>

</style>