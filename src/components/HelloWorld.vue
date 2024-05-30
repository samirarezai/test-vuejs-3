<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

    const count = ref(0)

    function increment() {
      // .value is needed in JavaScript
      count.value++
    }

</script>

<template>
  <h1>{{ msg }}</h1>

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
