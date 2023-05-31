<template>
  <div :class="[`select ${design}`, { show: show }]">
    <div class="select__selected" @click="show = !show">
      <input class="select__input" type="text" disabled :value="selected" v-bind="$attrs">
      <NuxtIcon class="select__icon" name="chevron" filled />
    </div>
    <ul class="select__options" v-if="show">
      <li class="select__option" v-for="option in options" :key="option.id" @click="onClick(option.title)">
        {{ option.title }}</li>
    </ul>
    <p class="select__message" v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
interface Select {
  id: string,
  title: string,
}

const props = defineProps({
  options: {
    type: Array as PropType<Select[]>,
    required: true
  },
  design: {
    type: String,
    default: 'default'
  },
  message: String,
  selected: String,
})


const selected = ref(props.selected || props.options[0].title)
const show = ref(false)

const onClick = (option: string) => {
  selected.value = option
  show.value = false
}
</script>

<style scoped lang="sass">
.select
  position: relative
  &__selected
    cursor: pointer
  &__input
    cursor: pointer
  &__option
    cursor: pointer
  &.default
    .select__selected
      display: flex
      justify-content: space-between
      border-bottom: 1px solid #7D7D7D
      padding-bottom: 16px


    .select__input
      font-size: 16px
      line-height: 19px
      letter-spacing: .03em
      flex-grow: 1
      width: 100%
      &::placeholder
        color: #7D7D7D
    .select__message
      margin-top: 16px
      font-size: 12px
      line-height: 14px
      letter-spacing: .03em
    .select__icon
      font-size: 18px
  &.section
    width: 100%
    .select__selected
      display: flex
      align-items: center
      justify-content: space-between
      cursor: pointer
    .select__input
      font-size: 128px
      line-height: 154px
      color: $black
      width: 100%
    .select__icon
      font-size: 40px
      transition: .3s
    .select__options
      display: flex
      flex-direction: column
      position: fixed
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      background-color: $darkbeige
      z-index: 1
      width: min(90%, 1170px)
    .select__option
      padding: 40px 0
      font-size: 32px
      line-height: 40px
      border-bottom: 1px solid $black
    &.show
      .select__icon
        transform: rotate(180deg)






</style>