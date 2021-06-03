<template>
  <div class="app-wrap">
    <router-view v-if="$route.meta.full"/>
    <template v-else>
      <TheHeader/>
      <main>
        <transition :name="$route.meta.transition" mode="out-in">
          <keep-alive :max="3">
            <router-view />
          </keep-alive>
        </transition>
      </main>
    </template>
    <VNotifications/>
    <VModals v-if="modalIsOpen"/>
  </div>
</template>
<script>
  import TheHeader from "./shared/components/TheHeader";
  import VNotifications from "./shared/components/VNotifications";

  import {getters} from "./shared/modals/modals-state";

  export default {
    name: "App",
    components: {
      TheHeader,
      VNotifications,
      VModals: () => import("./shared/modals/VModals")
    },
    computed: {
      modalIsOpen: () => getters.modalIsOpen
    }
  }
</script>
<style>

</style>
