<template>
  <section>
    <ProjectPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :liveLink="post.liveLink"
      :date="post.date"
      :titleEn="post.title.en"
      :titleFr="post.title.fr"
      :descriptionEn="post.description.en"
      :descriptionFr="post.description.fr"
      :stackEn="post.stack.en"
      :stackFr="post.stack.fr"
    />
  </section>
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

<style></style>
