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
import Navbar from "@/components/navigation/Navbar";
import Sidenav from "@/components/navigation/Sidenav";
import AppFooter from "@/components/footer/AppFooter";

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
    position: relative;
    top: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 65vh;
}

@include bp-up(lg){
  main {
    min-height: 70vh;
  }
}

@include bp-down(md) {
  .scroll-container {
    padding-bottom: 15rem;
  }
}
</style>
