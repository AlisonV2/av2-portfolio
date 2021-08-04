<template>
<div class="row">
    <ProjectPreview
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      :thumbnail="project.thumbnail"
      :liveLink="project.liveLink"
      :dateEn="project.date.en"
      :dateFr="project.date.fr"
      :title="project.title"
      :previewEn="project.preview.en"
      :previewFr="project.preview.fr"
      :descriptionEn="project.description.en"
      :descriptionFr="project.description.fr"
      :stack="project.stack"
    />
  </div>
</template>

<script>
import ProjectPreview from '@/components/projects/ProjectPreview'

export default {
  components: {
    ProjectPreview
  },
  props: {
      projects: {
        type: Array
    }
  }
};
</script>

<style lang="scss">
</style>
