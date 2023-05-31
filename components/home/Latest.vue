<template>
  <UiSection class="" no="(02)" title="Latest Projects">
    <template #top>
      <span>Featured Communities
        Ciio. Properties </span>
      <UiButton label="View All Communities" to="/" icon-right="arrow" />
    </template>
    <template #content>
      <div class="latest-content container">
        <div class="slider">

          <div class="slide">
            <span class="slide-number text-body">(01)</span>
            <p class="slide-title text-h1">
              <span class="slide-black">the</span>
              Bee
            </p>
            <img src="~/assets/images/slide.jpg" alt="slide">
          </div>
          <div class="details">
            <div class="details__col">
              <p class="details__text text-body">Affordable Units Starting</p>
              <span class="details__price">From $186,000</span>
            </div>
            <div class="details__col">
              <p class="details__text text-body">555 North 400 West
                Centerville, Utah 84014</p>
            </div>
            <div class="details__col">
              <p class="details__text text-body">50 Modern Townhomes
                Now Selling</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UiSection>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.latest
  &-content
    margin-top: 120px


.slide
  display: flex
  margin-bottom: 120px
  position: relative
  &-number
    width: 100px
    padding-top: 10%
    color: #7D7D7D
  &-title
    position: absolute
    top: 30%
    left: 0
    color: rgba(255, 255, 255, 0.5)
  &-black
    color: #181A20

.details
  display: flex
  align-items: center
  gap: 100px
  &__col
    display: flex
    flex-direction: column
    gap: 24px
    &:not(:first-child)
      max-width: 172px
  &__text
    color: #7D7D7D
  &__price
    font-size: 50px
    line-height: 50px


</style>