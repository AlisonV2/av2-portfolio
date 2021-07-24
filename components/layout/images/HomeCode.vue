<template>
  <p class="home-img">
    @mixin bp-up($breakpoint) { <br />
    &emsp;@if map-has-key($breakpoints, $breakpoint) {<br />
    &ensp; $breakpoint-value: map-get($breakpoints, $breakpoint);<br />
    &emsp;@media (min-width: $breakpoint-value) {<br />
    &ensp;&emsp;@content;<br />
    &ensp;}<br />
    &ensp;} @else {<br />
    &emsp;@warn 'Check for typos! Breakpoint: #{$breakpoint}.';<br />
    &ensp;}<br />
    }<br />
    <br />
    @mixin bp-down($breakpoint) {<br />
    &emsp; @if map-has-key($breakpoints, $breakpoint) {<br />
    &ensp;$breakpoint-value: map-get($breakpoints, $breakpoint);<br />
    &ensp;@media (max-width: ($breakpoint-value - 1)) {<br />
    &ensp;&emsp;@content;<br />
    &ensp;}<br />
    &emsp;} @else {<br />
    &ensp;@warn 'Check for typos! Breakpoint: #{$breakpoint}.';<br />
    &emsp;}<br />
    }
  </p>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-img {
  font-family: $code-font;
  font-size: 1.2rem;
  border-radius: 15px;
  justify-content: flex-end;
  display: flex;
  transform: perspective(28rem) rotateX(25deg);
  color: $accent-darker-50;
}
</style>
