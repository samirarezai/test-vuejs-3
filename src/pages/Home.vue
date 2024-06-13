<script setup lang="ts">
import {Ref, ref} from 'vue'

const count: Ref<number> = ref(0)
const name: Ref<string> = ref("")

function increment() {
  // .value is needed in JavaScript
  count.value++
  console.log(name.value)
}

</script>

<template>
  <h2 class="text-2xl p-2">Home</h2>
  <nav>

    <RouterLink to="/about" class="block mb-3">
      <v-btn block>Go to About</v-btn>
    </RouterLink>
    <RouterLink to="/login">
      <v-btn block>Go to Login</v-btn>
    </RouterLink>

  </nav>
  <button @click="increment">add</button>
  <p>
    result: {{ count }}
  </p>
</template>

