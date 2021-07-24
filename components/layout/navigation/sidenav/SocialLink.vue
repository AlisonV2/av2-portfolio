<template>
      <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      :v-tooltip="tooltip"
    >
      <font-awesome-icon :icon="icon" />
    </a>
</template>

<script>
export default {
    props: ['icon', 'tooltip', 'link']
}
</script>

<style>
</style>
