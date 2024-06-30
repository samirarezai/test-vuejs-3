<!--For this challenge, we're going to implement a counter. 👇:-->

<script setup lang='ts'>

import {ref} from "vue";

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * Implement the composable function
 * 1. inc (+)
 * 2. dec (-)
 * 3. reset
 * 4. min & max opotion support
 * Make sure the function works correctly
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const countV = ref(initialValue);
  const incF = () => {
    if (countV.value < options.max) {
      countV.value++;
    }
  }
  const decF = () => {
    if (countV.value > options.min) {
      countV.value--;
    }
  }
  const resetF = () => {
      countV.value = initialValue;
  }
  return {
    count: countV,
    inc: incF,
    dec:decF,
    reset:resetF
  }
}

const {count, inc, dec, reset} = useCounter(0, {min: 0, max: 10})

</script>
<template>
  <v-card class="mb-3" text="Practice : 4">
    <p>
      {{count}}
    </p>
    <v-btn @click="inc">
      inc
    </v-btn>
    <v-btn @click="dec">
      dec
    </v-btn>
    <v-btn @click="reset">
      reset
    </v-btn>
  </v-card>

</template>