<template>
  <div class="round-button-wrapper">
    <span class="round-button" role="button"><nuxt-link :to="localePath('/about')">i</nuxt-link></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.round-button a {
  border: 1px solid white;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  right: 1%;
  text-align: center;
  justify-content: center;
  display: block;
  font-family: "Alice", serif;
  font-size: 2.5rem;
  padding: 0.5rem;
  color: white!important;
  &:hover {
    color: black!important;
    background-color: white;
    animation: pulse 1s;
    box-shadow: 0 0 0 2em rgba(#fff, 0);
    transform: scale(1.3);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 white;
  }
}

@media screen and (min-width: 768px){
  .round-button a {
    right: 10rem;
  }
}
</style>
