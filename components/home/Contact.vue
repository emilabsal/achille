<template>
  <UiSection class="contact" no="(05)" title="Did we catch your eye?">
    <template #content>
      <div class="contact__inner container">
        <div class="contact__left">
          <p class="contact__text">
            We enjoy connecting with new people. Reach out to us by filling out the form, sending an email, or simply
            giving us a call.
          </p>
          <div class="contacts">
            <p class="contacts__title text-body">Phone / Email</p>
            <div class="contacts__desc">
              <UiButton class="contacts__link" label="0 00 000 000 .CITY" href="tel: 0 00 000 000 .CITY" />
              <UiButton class="contacts__link" label="achille@ciio.com" href="mailto:achille@ciio.com" />
            </div>
          </div>
        </div>
        <form class="form">
          <UiInput placeholder="First name" message="Hello, my first name is" />
          <UiInput placeholder="Last name" message="Hello, my last name is" />
          <UiInput placeholder="example@gmail.com" message="Contact me at" />
          <UiSelect :options="want" message="I'd like to" placeholder="Please Select" selected="" />
          <UiSelect :options="want" message="Community of interest" placeholder="Please Select" selected="" />
          <UiInput placeholder="0 00 000 000" message="Phone" />
          <UiSelect :options="want" message="Are you working with an agent?" placeholder="Please Select" selected="" />
          <UiSelect :options="want" message="Are you an agent?" placeholder="Please Select" selected="" />
          <div class="form__bottom">
            <UiButton class="form__button" to="/" label="Submit" icon-right="arrow" />
          </div>
        </form>
      </div>
    </template>
  </UiSection>
</template>

<script setup lang="ts">
const want = [
  { id: '1', title: 'hello' }
]
</script>

<style scoped lang="sass">
.contact
  background: $beige
  &__inner
    display: flex
    align-items: flex-start
    gap: 30px
    & > *
      flex-basis: 100%
  &__text
    margin-top: 120px
    margin-bottom: 120px
    font-size: 50px
    line-height: 50px


.form
  position: relative
  top: -19px
  display: grid
  grid-template-columns: repeat(2, 1fr)
  column-gap: 30px
  row-gap: 80px
  &__bottom
    grid-column: span 2
    display: flex
    align-items: center
    justify-content: center
    

.contacts
  &__title
    color: #7D7D7D
    margin-bottom: 40px
    font-weight: 500
  &__desc
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 8px
.contacts__link
  font-size: 32px !important
  line-height: 40px
  
</style>