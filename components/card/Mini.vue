<template>
  <UiButton class="card" :to="card.id">
    <img class="card__image" :src="`/_nuxt/assets/images/mini/${card.image}`" :alt="card.title">
    <div class="card__desc">
      <div class="card__block">
        <span class="card__title text-body">{{ card.title }}</span>
        <span class="card__subtitle text-small">{{ card.city }}</span>
      </div>
      <div class="card__block">
        <span class="card__title text-body">{{ card.status }}</span>
        <span class="card__subtitle text-small">Apartments / Starting From — {{ card.price }} Monthly</span>
      </div>
    </div>
  </UiButton>
</template>

<script setup lang="ts">
import Mini from '~/types/Card'

defineProps({
  card: {
    type: Object as PropType<Mini>,
    required: true
  }
})
</script>

<style scoped lang="sass">
.card
  display: flex
  flex-direction: column
  &__image
    height: 280px
    object-fit: cover
    object-position: center
  &__block
    display: flex
    flex-direction: column
    gap: 4px
    max-width: 193px
    &:last-child
      gap: 6px
  &__desc
    display: flex
    justify-content: space-between
    margin-top: 32px
    gap: 10px
  &__subtitle
    color: #999999
    

</style>