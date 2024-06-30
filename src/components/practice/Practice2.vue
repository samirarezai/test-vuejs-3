<!--For this challenge, we'll start by creating a composable function. Lets start with useToggle 👇:-->

<script setup lang='ts'>

import {ref} from "vue";

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
 */
function useToggle(e : boolean) {
  let s = ref<boolean>(e);
  const set = () => {
    s.value = !s.value;
  }
  return [
    s,
    set
  ]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <v-card class="mb-3" text="Practice : 2">
    <p>State: {{ state ? 'ON' : 'OFF' }}</p>
    <v-btn @click="toggle">
      Toggle state
    </v-btn>
  </v-card>
</template>