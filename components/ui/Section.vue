<template>
  <section class="section">
    <div class="top container" v-if="no || title">
      <div class="top-left">
        <span class="top-section text-body">{{ no }}</span>
        <span class="top-title text-body">{{ title }}</span>
      </div>
      <slot name="top"></slot>
    </div>
    <slot name="content"></slot>
  </section>
</template>

<script setup lang="ts">
defineProps({
  no: String,
  title: String,
})
</script>

<style scoped lang="sass">
.section
  padding-top: 120px
  padding-bottom: 120px

.top
  display: flex
  align-items: center
  justify-content: space-between
  &-section
    font-family: 'Neue Montreal Medium'
  &-title
    display: inline-block
    margin-left: 40px
    font-family: 'Neue Montreal Medium'

</style>