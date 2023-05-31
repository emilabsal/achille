<template>
  <header class="header container-wide">
    <div class="header-left">
      <UiButton class="logo" to="/">
        <img class="logo-image" src="~/assets/images/logo.svg" alt="logo">
      </UiButton>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item" v-for="(link, index) in nav" :key="index">
            <UiButton class="nav-link text-body" :label="link.title" :to="link.link" />
          </li>
        </ul>
      </nav>
    </div>
    <div class="contacts">
      <UiButton href="tel: 088 024 544 .CITY" label="088 024 544 .CITY" />
    </div>
  </header>
</template>

<script setup lang="ts">
const nav = [
  { link: '/', title: 'Search' },
  { link: '/', title: 'Communities' },
  { link: '/', title: 'Quick Move-ins' },
  { link: '/', title: 'Open Houses' },
  { link: '/', title: 'About' },
]
</script>

<style scoped lang="sass">
.header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 32px 0
  &-left
    display: flex
    align-items: center
    gap: 68px


.nav
  &-list
    display: flex
    align-items: center
    gap: 32px

</style>