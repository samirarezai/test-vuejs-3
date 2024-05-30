<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

function increment() {
  // .value is needed in JavaScript
  count.value++
}

</script>

<template>

  <h1>About</h1>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>
  <div class="card">
    <button @click="increment">
      {{ count }}
    </button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
