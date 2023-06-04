<template>
  <header class="header container-wide">
    <div class="header-left">
      <UiButton class="logo" to="/" icon-left="logo" />
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__tem" v-for="(item, index) in headerNav" :key="index">
            <UiButton class="nav__link text-body" :label="item.title" :to="item.link" />
          </li>
        </ul>
      </nav>
    </div>
    <div class="contacts">
      <UiButton class="contacts__link" href="tel: 088 024 544 .CITY" label="088 024 544 .CITY" />
      <UiButton :class="['button-burger', { show: show }]" @click="toggleMenu">
        <span class="button-burger__line"></span>
        <span class="button-burger__line"></span>
      </UiButton>
    </div>
    <div class="menu-mobile">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__tem" v-for="(item, index) in headerNav" :key="index">
            <UiButton class="nav__link text-body" :label="item.title" :to="item.link" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface Nav extends MarkdownParsedContent {
  link: string
  title: string,
}


const { data: nav } = await useAsyncData('nav', () => queryContent<Nav>('/nav').findOne())
const headerNav = computed(() => nav.value?.data.slice(0, 4))

const show = ref(false)

const toggleMenu = () => {
  show.value = !show.value
}
</script>

<style scoped lang="sass">
.header
  display: flex
  align-items: center
  justify-content: space-between
  gap: 10px
  padding: 32px 0
  flex-wrap: wrap
  &-left
    display: flex
    align-items: center
    gap: 60px

.logo
  &:deep(.button__icon-left)
    font-size: 122px

.nav
  +md()
    display: none
  &__list
    display: flex
    align-items: center
    gap: 32px
  &__link
    white-space: nowrap

.button-burger
  display: flex
  flex-direction: column
  gap: 8px
  display: none
  +md()
    display: flex
  &__line
    width: 22px
    height: 2px
    background-color: $black
    border-radius: 10px
  &.show
    gap: 0px
    position: relative
    padding: 10px 0
    .button-burger__line
      &:first-child
        transform: rotate(45deg) 
        position: absolute
      &:last-child
        transform: rotate(-45deg)
        

.menu-mobile
  display: none

.contacts
  display: flex
  align-items: center
  gap: 20px
  +sm()
    display: none
</style>