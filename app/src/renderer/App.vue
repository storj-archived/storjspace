<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import store from 'renderer/vuex/store'

export default {
  components: { Navbar },
  store
}
</script>

<style lang="stylus">
  @import './theme/theme.styl'

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body
    height: 101%
    width: 100%

  body
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    font-family: Avenir, Helvetica, sans-serif;
</style>
