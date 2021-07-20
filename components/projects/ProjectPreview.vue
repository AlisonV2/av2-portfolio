<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="content">
      <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
        <div class="content-overlay"></div>
        <img class="content-image img-fluid" :src="imageUrl" />
        <div class="content-details fadeIn-top">
          <h3 class="content-title">{{ $t("projects.title") }}</h3>
          <p class="content-text description">
            {{ $t("projects.title") }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectPreview",
  data() {
    return {
      imageUrl:
        "https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
    };
  }
};
</script>

<style lang="scss">
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
