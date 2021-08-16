<template>
      <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <font-awesome-icon :icon="icon" />
    </a>
</template>

<script>
export default {
    props: ['icon', 'link']
}
</script>

<style>
</style>
