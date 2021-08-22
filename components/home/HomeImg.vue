<template>
  <p class="home-img">
    // {{ $t("landing.bp-up") }}<br />
    @mixin bp-up($breakpoint) { <br />
    &emsp;@if map-has-key($breakpoints, $breakpoint) {<br />
    &ensp; $breakpoint-value: map-get($breakpoints, $breakpoint);<br />
    &emsp;@media (min-width: $breakpoint-value) {<br />
    &ensp;&emsp;@content;<br />
    &ensp;}<br />
    &ensp;} @else {<br />
    &emsp;&ensp;@warn '{{ $t("landing.typos") }} Breakpoint: #{$breakpoint}';<br />
    &ensp;}<br />
    }<br />
    // {{ $t("landing.bp-down") }}<br />
    @mixin bp-down($breakpoint) {<br />
    &emsp; @if map-has-key($breakpoints, $breakpoint) {<br />
    &ensp;$breakpoint-value: map-get($breakpoints, $breakpoint);<br />
    &ensp;@media (max-width: ($breakpoint-value - 1)) {<br />
    &ensp;&emsp;@content;<br />
    &ensp;}<br />
    &emsp;} @else {<br />
    &emsp;&ensp;@warn '{{ $t("landing.typos") }} Breakpoint: #{$breakpoint}';<br />
    &emsp;}<br />
    }
  </p>
</template>

<style lang="scss">
.home-img {
  font-family: $default-font;
  font-size: 1.2rem;
  display: none;
  transform: perspective(28rem) rotateX(25deg);
  color: $accent-darker-50;
}

@include bp-up(xl) {
  .home-img {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
