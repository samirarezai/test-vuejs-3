<template>
  <div class="flex justify-center ga-6 mb-6">
    <v-btn size="large" @click="activeComponent='Tab1'">Tab 1</v-btn>
    <v-btn size="large" @click="activeComponent='Tab2'">Tab 2</v-btn>
    <v-btn size="large" @click="activeComponent='Tab3'">Tab 3</v-btn>
  </div>
  <KeepAlive>
    <component :is="activeComponent"/>
  </KeepAlive>

</template>
<script>

import Tab1 from "../fragments/library/Tab1.vue";
import Tab2 from "../fragments/library/Tab2.vue";
import Tab3 from "../fragments/library/Tab3.vue";

export default {
  components: {Tab3, Tab2, Tab1},
  data() {
    return {
      activeComponent: "Tab1"
    }
  }

}
</script>