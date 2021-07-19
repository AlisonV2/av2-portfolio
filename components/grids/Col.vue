<template>
  <div class="col-12" :class="colClass" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    colClass: {
      type: String,
      default: ""
    }
  }
};
</script>
