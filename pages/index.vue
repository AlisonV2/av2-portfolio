<template>

<div class="container">
        <span>
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
        </span>
        <span>&#9679;</span>
        <span>
          <nuxt-link :to="switchLocalePath('fr')">FR</nuxt-link>
        </span>
        <h1>
          {{ $t('landing.hi')}}, <br />
          {{ $t('landing.im')}}<span class="name"> Alison,</span> <br />
          {{ $t('landing.webdev')}}
        </h1>
        <nuxt-link :to="('/about')">About</nuxt-link>
</div>
</template>

<script>
export default {}
</script>
