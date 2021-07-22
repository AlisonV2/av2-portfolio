<template>
  <div class="container">
    <div class="row">
            <ProjectList
              :posts="loadedPosts" />
    </div>
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
.row {
  --bs-gutter-y: 1.5rem;
}

.row > * {
  padding-top: calc(var(--bs-gutter-x) * 0.5);
  padding-bottom: calc(var(--bs-gutter-x) * 0.5);
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
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
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-top {
  top: 20%;
}
</style>
