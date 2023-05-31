<template>
  <UiSection class="search" no="(03)" title="I'm looking for:">
    <template #content>
      <div class="search__inner container">
        <UiSelect :options="options" />
        <div class="search__cards">
          <CardMini v-for="card in cardsMini" :card="card" :key="card.id" />
        </div>
      </div>
    </template>
  </UiSection>
</template>

<script setup lang="ts">
import Mini from '~/types/Card'

const options = reactive([
  { id: '1', title: 'Apartments' },
  { id: '2', title: 'Houses' },
  { id: '3', title: 'Gardens' },
])

const cardsMini = reactive<Mini[]>([
  { id: '1', image: 'mini1.jpg', title: 'theBEVERLY', city: 'Salt Lake City', status: 'Now Leasing', price: '$1,675+' },
  { id: '1', image: 'mini1.jpg', title: 'theBEVERLY', city: 'Salt Lake City', status: 'Now Leasing', price: '$1,675+' },
  { id: '1', image: 'mini1.jpg', title: 'theBEVERLY', city: 'Salt Lake City', status: 'Now Leasing', price: '$1,675+' },
])

</script>

<style scoped lang="sass">
.search
  background-color: $darkbeige
  &__inner
    margin-top: 80px
    width: 100%
  &__cards
    margin-top: 80px
    display: flex
    gap: 30px
    


</style>