<template>
    <div class="row" :class="rowClass" v-bind="$attrs">
      <slot/>
    </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    rowClass: {
      type: String,
      default: ''
    }
  }
};

</script>
