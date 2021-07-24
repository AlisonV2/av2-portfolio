<template>
    <div id="app">
        <Navbar @toggleSidenav="displaySidenav = !displaySidenav"/>
        <Sidenav
          :show="displaySidenav"
          @closeSidenav="displaySidenav = false"/>
        <main id="content-wrapper">
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

#content-wrapper {
    height: 70vh;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
}

@include bp-up(lg){
  #content-wrapper {
    overflow: hidden;
  }
}
</style>
