<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>

    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './Share/Header.vue'
  import Footer from './Share/Footer.vue'
  import Servers from './Server/Servers.vue';
  import ServerDetails from './Server/ServerDetails.vue';

  export default {
    components: {
      'app-header': Header,
      'app-servers': Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer,
    }
  }
</script>


<style>

</style>
