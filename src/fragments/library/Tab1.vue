<template>
  <v-card :text="'Tab 1'">

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aliquid asperiores consectetur ducimus
      error esse facilis ipsa laboriosam laudantium libero magnam minima mollitia perferendis quae quaerat quam,
      reprehenderit vero!</p>
    <p>{{count}}</p>
    <v-btn class="my-6" @click="count++">
      click
    </v-btn>
  </v-card>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      count: 0
    }
  }
}
</script>