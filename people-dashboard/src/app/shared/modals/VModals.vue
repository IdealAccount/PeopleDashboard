<template>
  <div class="modal-list">
    <component :is="require(`./${modalName}Modal`).default"
               :key="index"
               :modal-data="data"
               :modal-name="modalName"
               :style="{zIndex: 1000 + index }"
               v-for="({modalName, data}, index) of modalList"
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
