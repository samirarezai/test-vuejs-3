<script setup type="ts">
import {useQuery} from '@tanstack/vue-query'
import {ref} from "vue";

const textInput = ref('');
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

</script>

<template>

  <h1 class="text-4xl font-bold mb-6">To dos</h1>
  <p class="text-lg mb-6">This is a simple home page built with Vue.js, Tailwind CSS, and Vuetify.</p>

  <v-text-field placeholder="Search your text here" v-model="textInput">
    <!--    <template #append>-->
    <!--      <v-btn @click="handleSearch">Search</v-btn>-->
    <!--    </template>-->
  </v-text-field>

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
            cols="12"
            sm="6"
            lg="4"
        >
          <v-card v-if="textInput && todo.title.includes(textInput)" variant="tonal" class="inline-block m-3">
            <span class="inline-block py-2">
              <template
                    v-for="(child ,i) in todo.title.split(new RegExp(`(${textInput.trim()})`, 'gi'))">
                <mark v-if="i%2 !== 0 ">{{ child }}</mark>
                <span v-else>{{ child }}</span>
              </template>
            </span>
          </v-card>
          <v-card v-else variant="tonal" class="inline-block m-3">
            <span class="inline-block py-2">{{ todo.title }}</span>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-skeleton-loader>

</template>
