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
    min-height: 60vh;
}

@include bp-up(md){
  #content-wrapper {
    min-height: 65vh;
  }
}

@include bp-up(lg){
  #content-wrapper {
    min-height: 70vh;
  }
}

@include bp-up(xl){
  #content-wrapper {
    overflow: hidden;
  }
}
</style>
