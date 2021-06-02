<template>
  <div class="app-wrap">
    <TheHeader/>
    <main>
      <transition :name="$route.meta.transition" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </main>
  </div>
</template>
<script>
  import TheHeader from "./components/TheHeader";
  export default {
    name: "App",
    components: {
      TheHeader
    }
  }
</script>

<style lang="scss">

</style>
