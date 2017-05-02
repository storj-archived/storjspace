<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import store from 'renderer/vuex/store'
import Storj from 'vendor/storj.es5.js'
import config from './config'
import storage from 'electron-json-storage'

// storage.set('user', {
//   email: 'lott.dylan@gmail.com',
//   password: 'password'
// })
const user = storage.get('user', (err, user) => {
  if (err) return null
  return user
})
const storj = new Storj(config)
const keyList = storj.getKeyList()
console.log('keyList', keyList)
console.log('USER: ', user)

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
