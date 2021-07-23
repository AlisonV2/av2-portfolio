<template>
  <div class="round-button-wrapper">
    <span class="round-button" role="button">i</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.round-button {
  border: 1px solid white;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  position: absolute;
  bottom: 6rem;
  right: 10%;
  text-align: center;
  justify-content: center;
  display: block;
  font-family: "Alice", serif;
  font-size: 2.5rem;
  padding: 0.5rem;
  &:hover,
  &:focus {
    color: black;
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
</style>
