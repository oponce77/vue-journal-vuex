<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button @click="gotoDaybook" class="btn btn-primary">Primary</button>
    <button @click="gotoDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="gotoDaybook" class="btn btn-success">Success</button>

  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    gotoDaybook() {
      console.log("Entramos");
      this.$router.push({name: 'daybook'})
    }
  }
}
</script>
