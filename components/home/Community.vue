<template>
  <UiSection class="community" no="(04)" title="We build community.">
    <template #top>
      <p class="community__slogan">Wherever we build,
        we make it better.</p>
      <UiButton class="community__link" to="/" icon-right="arrow" label="About us" />
    </template>
    <template #content>
      <div class="community__content container">
        <img class="community__image" src="~/assets/images/person.jpg" alt="person">
        <p class="community__text">Our aim is to build micro-communities that enrich and fortify local areas, turning
          every space into an opportunity through well-planned land use and design, fostering exploration and growth with
          a positive impact on existing communities.</p>
      </div>
    </template>
  </UiSection>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.community
  &__slogan
    max-width: 140px
  &__content
    margin-top: 120px
    display: flex
    align-items: center
    gap: 30px
  &__text
    font-size: 50px
    line-height: 50px
  


</style>