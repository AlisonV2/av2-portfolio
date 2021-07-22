<template>
  <button :class="btnClass" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnClass: {
      type: String,
      default: ""
    }
  }
};
</script>
