<template>
<div class="row">
    <ProjectPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :liveLink="post.liveLink"
      :dateEn="post.date.en"
      :dateFr="post.date.fr"
      :title="post.title"
      :previewEn="post.preview.en"
      :previewFr="post.preview.fr"
      :descriptionEn="post.description.en"
      :descriptionFr="post.description.fr"
      :stack="post.stack"
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
      posts: {
    type: Array
  }
  }
};
</script>

<style lang="scss">
</style>
