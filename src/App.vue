<template>
  <div id="app">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Passworld</h2>
      <md-button @click="route('ask')">Ask</md-button>
      <md-button @click="route('credential')">Credential</md-button>
      <md-button>Manage</md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    route (vueName) {
      this.$router.push(vueName)
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>