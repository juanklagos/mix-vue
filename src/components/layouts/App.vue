<template>
  <div>
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="login">Login</router-link></li>
          <li><router-link to="register">Register</router-link></li>
      </ul>
      <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>