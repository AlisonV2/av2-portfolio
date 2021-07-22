<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <nuxt-link :to="localePath('/projects/' + id)">
      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image img-fluid" :src="thumbnail" />
        <div class="content-details fadeIn-top">
          <h3 class="content-title" v-if="$i18n.locale === 'en'">
            {{ titleEn }}
          </h3>
          <h3 class="content-title" v-if="$i18n.locale === 'fr'">
            {{ titleFr }}
          </h3>
          <p class="content-text description" v-if="$i18n.locale === 'en'">
            {{ descriptionEn }}
          </p>
          <p class="content-text description" v-if="$i18n.locale === 'fr'">
            {{ descriptionFr }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    titleEn: {
      type: String
    },
    titleFr: {
      type: String
    },
    descriptionEn: {
      type: String
    },
    descriptionFr: {
      type: String
    },
    stackEn: {
      type: String
    },
    stackFr: {
      type: String
    },
    thumbnail: {
      type: String
    },
    date: {
      type: String
    }
  }
};
</script>

<style></style>
