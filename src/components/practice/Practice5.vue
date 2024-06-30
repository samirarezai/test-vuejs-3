We often need to use the localStorage API. A composable function will help us use it better. Lets go. 👇:

<script setup lang='ts'>

import {ref} from "vue"

/**
 * Implement the composable function
 Make sure the function works correctly
 */
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)
  localStorage.setItem(key, value.value)
  return value
}

const counter = useLocalStorage("counter", 0)

// We can get the localStorage by triggering the getter:
console.log(counter.value)

// And we also can set the localStorage by triggering the setter:

counter.value = 1

</script>

<template>
  <v-card class="mb-3" text="Practice : 4">

  </v-card>

</template>