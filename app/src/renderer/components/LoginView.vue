<template>
  <div>
    <div class="login">
      <div class="header">
        <h1>Login to Storj</h1>
      </div>
      <form v-model="user">
        <div class="row">
          <div class="col"></div>
          <div class="form-box">
            <b-form-input
              type="text"
              name="email"
              placeholder="Email"
              v-model="user.email">
            </b-form-input>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="form-box">
            <b-form-input
              type="password"
              name="password"
              placeholder="Password"
              v-model="user.password">
            </b-form-input>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col">
            <b-button type="submit" @click.native="submit(user)">
              Login
            </b-button>
          </div>
        </div>
    </form>

    </div>
  </div>
</template>

<script>
import router from '../routes'
import storage from 'electron-json-storage'

export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit (user) {
      console.log('logging in user: ', user)
      this.$store.dispatch('login', user)
    }
  },
  created () {
    storage.get('user', (err, user) => {
      if (err) console.log(err)
      if (user.email !== '' || undefined) router.push({ name: 'dashboard' })
    })
  }
}
</script>

<style scoped lang="stylus">
  .login
    width: 600px
    margin: 0 auto
    margin-top: 100px
    text-align: center

  .form-box
    width: 350px
    margin: 10px
</style>
