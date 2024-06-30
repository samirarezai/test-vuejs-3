<!--For this challenge, we'll start by creating a custom directive. Lets start with v-focus 👇:-->

<script setup lang='ts'>
import {ref} from "vue"

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
 */

const VFocus = {
  mounted(el) {
    el.focus()
  },
  updated(el) {
    if (state.value)
      el.blur()
    else
      el.focus()
  }
}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>


<template>
  <v-card class="mb-3" text="Practice : 6">
    <input v-focus="state" type="text">
  </v-card>

</template>