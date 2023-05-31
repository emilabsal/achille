<template>
  <UiSection class="about" no="(01)" title="About us">
    <template #top>
      <UiButton label="Get to know us" to="/" icon-right="arrow" />
    </template>
    <template #content>
      <div class="about-content container">
        <p class="about-text">Achille Ciio is leading the way in creating
          unique real estate for Utah residents.</p>
      </div>
    </template>
  </UiSection>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.about
  background-color: $beige
  &-text
    margin-top: 120px
    font-size: 50px
    line-height: 50px
    font-weight: 400

</style>