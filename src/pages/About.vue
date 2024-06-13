<script setup type="ts">
import {useQueryClient, useQuery, useMutation} from '@tanstack/vue-query'
// import ButtonEX from "components/ButtonEX.vue"
import ButtonEX from "../components/ButtonEX.vue"
// Access QueryClient instance
const queryClient = useQueryClient()

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
const mutation = useMutation({
  mutationFn: () => ({
    title: 'string', id: 1
  }),
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({queryKey: ['todos']})
  },
})

function onButtonClick() {
  mutation.mutate({
    id: Date.now(),
    title: 'Do Laundry',
  })
}
</script>

<template>
  <h2 class="text-2xl p-2">To dos</h2>
  <span v-if="isError">Error: {{ error.message }}</span>
  <v-skeleton-loader
      v-else
      :loading="isLoading"
      type="list-item-two-line"
  >
  <v-card >
  <ul>
    <li v-for="todo in data" :key="todo.id">
      <v-card :text="todo.title" variant="tonal" class="inline-block m-3"/>
    </li>
  </ul>
  </v-card>
  </v-skeleton-loader>

</template>
