<template>
  <div :class="`input ${design}`">
    <label class="input__label" :for="id" v-if="label">{{ label }}</label>
    <input class="input__field" v-bind="$attrs" :id="id" />
    <p class="input__message" v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  id: String,
  message: String,
  design: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped lang="sass">
.input
  &.default
    .input__field
      font-size: 16px
      line-height: 19px
      letter-spacing: .03em
      padding-bottom: 16px
      border-bottom: 1px solid #7D7D7D
      flex-grow: 1
      width: 100%
      &::placeholder
        color: #7D7D7D
    .input__message
      margin-top: 16px
      font-size: 12px
      line-height: 14px
      letter-spacing: .03em
        
    

</style>