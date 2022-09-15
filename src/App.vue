
<template>
  <v-app>
    <v-main>
      <v-app-bar color="#15202B">
        <v-app-bar-title
          class="text-center font-weight-bold text-h4 text-white"
        >
          MY SHOP
        </v-app-bar-title>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
