<template>
  <section class="hero">
    <div class="hero__inner container">
      <p class="hero__subtitle text-medium">Building what’s next in the heart of Utah</p>
      <h1 class="hero__title text-h1">Find your favorite place</h1>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.hero
  background: url(~/assets/images/home-hero.jpg) no-repeat center/cover
  padding: 150px 0
  &__subtitle
    text-align: center
    color: $white
    margin-bottom: 40px
  &__title
    color: $white
    max-width: 800px
    margin: 0 auto
    text-align: center


</style>