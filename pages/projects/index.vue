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
    <ProjectList :projects="loadedProjects" />
  </div>
</template>

<script>
import ProjectList from "@/components/projects/ProjectList";

export default {
  components: {
    ProjectList
  },
  computed: {
    loadedProjects() {
      return this.$store.getters.loadedProjects;
    }
  }
};
</script>

<style lang="scss"></style>
