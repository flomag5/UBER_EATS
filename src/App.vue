<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
@import url('./styles/reset.css');
@import url('https: //fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
#app {
  font-family: 'Roboto',
    sans-serif, Helvetica, Arial, sans-serif;
padding: 0px 20px;
}
</style>
