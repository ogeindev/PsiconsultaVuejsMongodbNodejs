<template>
  <div class="home">
    <img alt="Psi logo" src="../assets/icopsi.jpg" class="logopsi">
    <welcome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from "@/components/welcome.vue";

export default {
  name: "home",
  components: {
    welcome
  }
};
</script>
<style>
  .home {
    background-image: url("../assets/a.jpg");
    background-size: cover;
    height: 100vh;
  }
  .logopsi {
    margin-top: 10%;
    width: 20%;
    height: 30%;
  }
</style>

