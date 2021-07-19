<template>
    <div id="app">
        <Navbar @toggleSidenav="displaySidenav = !displaySidenav"/>
        <Sidenav
          :show="displaySidenav"
          @closeSidenav="displaySidenav = false"/>
        <main>
        <Nuxt />
        </main>
        <AppFooter />
    </div>
</template>

<script>
import Navbar from "@/components/layout/navigation/Navbar";
import Sidenav from "@/components/layout/navigation/Sidenav";
import AppFooter from "@/components/layout/footer/AppFooter";

export default {
  components: {
    Navbar,
    Sidenav,
    AppFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  }
};
</script>

<style lang="scss">
main {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
