<template>
  <div class="app-wrap">
    <TheHeader/>
    <main>
      <router-view />
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
