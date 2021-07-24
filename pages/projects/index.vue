<template>
  <div class="container">
      <ProjectList :posts="loadedPosts" />
  </div>
</template>

<script>
import ProjectList from '@/components/projects/ProjectList'

export default {
  components: {
    ProjectList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="scss">
</style>
