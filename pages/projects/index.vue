<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AppHeader>
          <template v-slot:pretitle>{{ $t("projects.pretitle") }}</template>
          <template v-slot:title>{{ $t("projects.title") }}</template>
        </AppHeader>
      </div>
    </div>
    <ProjectList :posts="loadedPosts" />
  </div>
</template>

<script>
import ProjectList from "@/components/projects/ProjectList";

export default {
  components: {
    ProjectList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style lang="scss"></style>
