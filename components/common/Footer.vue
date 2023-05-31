<template>
  <footer class="footer">
    <div class="footer__inner container">
      <UiButton class="logo" to="/">
        <NuxtIcon class="logo__image" name="logo" />
      </UiButton>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.footer
  padding: 120px 0
  background-color: #262A34

.logo
  &__image
    color: $white
    font-size: 105px

</style>