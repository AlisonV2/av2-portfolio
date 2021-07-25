<template>
  <div>
    <h1 v-if="error.statusCode === 404">{{ $t("error.404") }}</h1>
    <h1 v-else>{{ $t("error.other") }}</h1>
    <NuxtLink to="/">{{ $t("error.back") }}</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
