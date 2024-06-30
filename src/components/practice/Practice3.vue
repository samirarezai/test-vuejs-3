<!--We always need to rely on the asynchronous return result in order to do something, and the until function is so useful in this scenario. Can you do it? Lets try it 👇:-->

<script setup lang='ts'>
import {ref, watch} from "vue"

const count = ref(0)

/**
 * Implement the until function
 */

function until(initial) {
  function toBe(value) {
    return new Promise((resolve) => {
      watch(initial, newValue => {
        if (newValue === value)
          resolve(value === count.value)
      })

    })
  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}

</script>
<template>
  <v-card class="mb-3" text="Practice : 3">
    <v-btn @click="increase">
      click
    </v-btn>
  </v-card>
</template>