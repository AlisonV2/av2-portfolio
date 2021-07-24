<template>
  <div class="container">
    <HeaderRow/>
    <TextRow/>
    <ResumeRow/>
  </div>
</template>

<script>
import HeaderRow from '@/components/about/HeaderRow';
import TextRow from '@/components/about/TextRow';
import ResumeRow from '@/components/about/ResumeRow';

export default {
  components: {
    HeaderRow,
    TextRow,
    ResumeRow
  }
};
</script>

<style lang="scss">
</style>
