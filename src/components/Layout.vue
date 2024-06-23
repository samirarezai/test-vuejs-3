<template>

  <v-app>
    <div class="home bg-gray-100 min-h-screen">
      <v-app-bar app color="primary" >
        <v-toolbar-title>My Vue.js App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  to="/">Home</v-btn>
        <v-btn  to="/todo">To do</v-btn>
        <v-btn  to="/login">Login</v-btn>
        <v-btn  to="/library">Library</v-btn>
      </v-app-bar>
      <v-main>
        <v-container class="text-center pt-12">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </v-container>
      </v-main>
      <v-footer app color="primary" dark class="text-center py-4">
        <span>&copy; 2024 My Vue.js App</span>
      </v-footer>
    </div>
  </v-app>
</template>
<script setup lang="ts">
</script>

<style>
.home {
  background-image: url('../assets/images/banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.home::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 10, 28, 0.5);
  top:0;
  z-index:0;

}
main{
  position: relative;
  z-index: 1;
}
</style>