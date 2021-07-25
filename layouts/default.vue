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

#content-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

@include bp-up(lg){
  #content-wrapper {
    overflow: hidden;
    height: 70vh;
  }
}
</style>
