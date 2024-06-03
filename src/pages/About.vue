<script setup type="ts">
import {useQueryClient, useQuery, useMutation} from '@tanstack/vue-query'

// Access QueryClient instance
const queryClient = useQueryClient()

// Query
const {isPending, isError, data, error} = useQuery({
  queryKey: ['todos'],
  queryFn: () => [{
    title: 'string', id: 1
  }],
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
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <button @click="onButtonClick">Add Todo</button>
</template>
