<template>
  <v-form v-model="valid" @submit.prevent="submitForm">
    <v-text-field
        v-model="todo"
        :counter="10"
        label="Task"
        hide-details
        required
    >
      <template #append>
        <v-btn type="submit">
          add
        </v-btn>
      </template>
    </v-text-field>
    <h2 class="my-3">Todo List</h2>
    <p v-if="todoList.length < 1">To do List is empty</p>
    <v-card v-for="(item, index) in todoList" :key="item" :text="item" class="mb-3" >
      <v-btn color="error" class="mb-6" @click="deleteTodo(index)">
        Delete
      </v-btn>
    </v-card>
  </v-form>
</template>
<script type="ts">
export default {
  data: () => ({
    valid: false,
    todo: '',
    todoList: []
  }),
  methods: {
    submitForm(e) {
      e.preventDefault()
      this.todoList.push(this.todo)
      this.todo = ""
    },
    deleteTodo(todoKey){
      this.todoList.splice(todoKey, 1)
    }
  }
}
</script>