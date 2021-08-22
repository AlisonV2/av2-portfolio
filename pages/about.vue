<template>
  <div class="container scroll-container">
    <AppHeader>
      <template v-slot:pretitle>{{ $t("about.pretitle") }}</template>
      <template v-slot:title>{{ $t("about.title") }}</template>
    </AppHeader>
    <TextRow />
    <ResumeRow />
  </div>
</template>

<script>
import TextRow from "@/components/about/TextRow";
import ResumeRow from "@/components/about/ResumeRow";

export default {
  components: {
    TextRow,
    ResumeRow
  }
};
</script>

<style lang="scss">

</style>
