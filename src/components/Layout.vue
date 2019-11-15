<template>
  <div>
      <app-header></app-header>
      <app-navbar></app-navbar>
      <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'
import AppMain from './AppMain'
export default {
  data () {
    return {

    }
  },
  components:	{
    AppHeader,AppNavbar,AppMain
  },
  methods: {},
}
</script>

<style scoped>
  .header{
    position: absolute;
    line-height: 50px;
    background: #FF8888;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    box-shadow: 0 0.5px 5px #003C9D;
    z-index: 1000;
  }
  .navbar{
    position: absolute;
    width: 230px;
    background: #E63F00;
    top:50px;
    left: 0;
    bottom: 0;
    overflow-y: auto; 
    box-shadow: 0.5px 0 3px #C63300;
    z-index: 100;
  }
  .main{
    position: absolute;
    top: 50px;
    left: 230px;
    right: 0;
    bottom: 0;
    padding: 10px;
    overflow-y: auto;
  }
</style>
