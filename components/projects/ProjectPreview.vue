<template>
  <div class="col-12 col-lg-6 col-xl-4 mb-4 project-cols">
    <nuxt-link :to="localePath('/projects/' + id)">
      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image img-fluid" :alt="title" :src="thumbnail" />
        <div class="content-details fadeIn-top">
          <h5 class="content-title">
            {{ title }}
          </h5>
          <p class="content-text description" v-if="$i18n.locale === 'en'">
            {{ previewEn }}
          </p>
          <p class="content-text description" v-if="$i18n.locale === 'fr'">
            {{ previewFr }}
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
    title: {
      type: String
    },
    previewEn: {
      type: String
    },
    previewFr: {
      type: String
    },
    descriptionEn: {
      type: String
    },
    descriptionFr: {
      type: String
    },
    stack: {
      type: String
    },
    thumbnail: {
      type: String
    },
    dateEn: {
      type: String
    },
    dateFr: {
      type: String
    },
    liveLink: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.content-image {
  height: 25rem;
  width: 100%;
  border-radius: .5rem;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}
.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: $light;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: $light;
  font-size: 0.8em;
}

.fadeIn-top {
  top: 20%;
}
</style>
