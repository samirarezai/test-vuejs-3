<!--provides a directive that renders the element and the component only once, and skips future updates.-->

<script setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <v-card class="mb-3" text="Practice : 1">
    <span v-once>Make it not to change: {{ count }}</span>
  </v-card>
</template>