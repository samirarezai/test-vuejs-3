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

  <h1>Home</h1>
  <nav>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/login">Go to Login</RouterLink>
  </nav>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <form @submit.prevent="increment">
      <input v-model="name" type="text" name="name" id="name" placeholder="Name" class="mb-5 border w-full"/>
      <input type="text" name="email" id="email" placeholder="Email" class="mb-5 border w-full"/>
      <input type="text" name="password" id="password" placeholder="Password" class="mb-5 border w-full"/>
      <button type="submit" class="bg-amber-950 rounded-full text-amber-50 px-3 py-2 w-full">Submit</button>
    </form>
  </div>
  <p>
    result: {{ count }}
  </p>
</template>

