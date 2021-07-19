<template>
    <div :class="{ 'container': container, 'container-fluid': fluid}" v-bind="$attrs">
      <slot/>
    </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      container: true,
      fluid: false
    }
  }
};

</script>
