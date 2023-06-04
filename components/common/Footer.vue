<template>
  <footer class="footer">
    <div class="footer__inner container">
      <UiButton class="logo" to="/" icon-left="logo" />
      <div class="footer__content">
        <div class="footer__col">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in firstNavColumn">
                <UiButton class="nav__link text-body-bigger" :to="item.link" :label="item.title" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__col">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in secondNavColumn">
                <UiButton class="nav__link text-body-bigger" :to="item.link" :label="item.title" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__col">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in thirdNavColumn">
                <UiButton class="nav__link text-body-bigger" :to="item.link" :label="item.title" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__col">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in fourthNavColumn">
                <UiButton class="nav__link text-body-bigger" :to="item.link" :label="item.title" />
              </li>
            </ul>
          </nav>
          <div class="contacts">
            <UiButton class="contacts__link text-body-bigger" href="tel: 1.866.744.CITY" label="1.866.744.CITY" />
            <UiButton class="contacts__link text-body-bigger" href="mailto: hello@builtbycw.com"
              label="hello@builtbycw.com" />
          </div>
        </div>
      </div>
      <div class="copyright">
        <p class="copyright__text text-body">
          All for sale product is listed by Ciio
        </p>
        <div class="copyright__block">
          <span class="copyright__text text-body-smaller">©2022</span>
          <span class="copyright__text text-body-smaller">All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface Nav extends MarkdownParsedContent {
  link: string
  title: string,
}

const { data: nav } = await useAsyncData('nav', () => queryContent<Nav>('/nav').findOne())

const firstNavColumn = ref(nav.value?.data.slice(0, 4))
const secondNavColumn = ref(nav.value?.data.slice(4, 8))
const thirdNavColumn = ref(nav.value?.data.slice(8, 12))
const fourthNavColumn = ref(nav.value?.data.slice(12, 13))

</script>

<style scoped lang="sass">
.footer
  padding: size(50, 120) 0
  background-color: #262A34
  &__content
    display: flex
    align-items: flex-start
    margin-top: size(40, 80)
    flex-wrap: wrap
    gap: size(24, 106)
    +sm()
      flex-direction: column
      gap: 24px
.nav
  &__list
    display: flex
    flex-direction: column
    gap: 24px
  &__link
    color: $white

.logo
  &:deep(.button__icon-left)
    color: $white
    font-size: 122px

.contacts
  margin-top: 24px
  display: flex
  flex-direction: column
  gap: 4px
  &__link
    color: $white

.copyright
  margin-top: size(42, 80)
  max-width: 375px
  display: flex
  flex-direction: column
  gap: 48px
  &__text
    color: #999999
  &__block
    display: flex
    align-items: center
    justify-content: space-between

</style>