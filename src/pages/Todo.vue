<script setup type="ts">
import {useQueryClient, useQuery, useMutation} from '@tanstack/vue-query'
// import ButtonEX from "components/ButtonEX.vue"
import ButtonEX from "../components/ButtonEX.vue"
// Access QueryClient instance
// const queryClient = useQueryClient()

// Query
const {isLoading, isError, data, error} = useQuery({
  queryKey: ['todos'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
})

// Mutation
// const mutation = useMutation({
//   mutationFn: () => ({
//     title: 'string', id: 1
//   }),
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries({queryKey: ['todos']})
//   },
// })

// function onButtonClick() {
//   mutation.mutate({
//     id: Date.now(),
//     title: 'Do Laundry',
//   })
// }
</script>

<template>

  <h1 class="text-4xl font-bold mb-6">To dos</h1>
  <p class="text-lg mb-6">This is a simple home page built with Vue.js, Tailwind CSS, and Vuetify.</p>
  <v-text-field placeholder="Search your text here"></v-text-field>
  <span v-if="isError">Error: {{ error.message }}</span>
  <v-skeleton-loader
      v-else
      :loading="isLoading"
      type="list-item-two-line"
  >
    <v-card>
      <v-row justify="space-around">
        <v-col
            v-for="todo in data" :key="todo.id"
            cols="4"
        >
          <v-card :text="todo.title" variant="tonal" class="inline-block m-3"/>
        </v-col>
      </v-row>
    </v-card>
  </v-skeleton-loader>

</template>
