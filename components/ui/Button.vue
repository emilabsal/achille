<template>
  <button :class="`button`" v-if="!href && !to">
    <NuxtIcon class="button__icon-left" :name="iconLeft" v-if="iconLeft" />
    <span class="button-label" v-if="label">{{ label }}</span>
    <NuxtIcon class="button__icon-right" :name="iconRight" v-if="iconRight" />
    <slot></slot>
  </button>
  <NuxtLink :class="`button ${design}`" :to="to" v-else-if="to">
    <NuxtIcon class="button__icon-left" :name="iconLeft" v-if="iconLeft" />
    <span class="button-label" v-if="label">{{ label }}</span>
    <NuxtIcon class="button__icon-right" :name="iconRight" v-if="iconRight" />
    <slot></slot>
  </NuxtLink>
  <a :class="`button`" v-else-if="href" :href="href">
    <NuxtIcon class="button__icon-left" :name="iconLeft" v-if="iconLeft" />
    <span class="button-label" v-if="label">{{ label }}</span>
    <NuxtIcon class="button__icon-right" :name="iconRight" v-if="iconRight" />
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  href: String,
  to: String,
  iconLeft: String,
  iconRight: String,
  design: {
    type: String,
    default: ''
  }
})
</script>

<style lang="sass">
.button
  display: inline-flex
  align-items: center
  flex-shrink: 0
  white-space: nowrap
  &-label
    color: inherit
    font-size: inherit
    line-height: inherit
    font-weight: inherit
    letter-spacing: inherit
  &.default
    gap: 30px
    padding: 16px
    font-size: 16px
    line-height: 16px
    font-weight: 500
    width: fit-content
    .button__icon-right
      color: #FE7B1E
      font-size: 32px



</style>