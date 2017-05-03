<template>
  <div>
    <div class="login">
      <div class="header">
        <h1>Login to Storj</h1>
      </div>

      <b-form-input
        type="text"
        name="email"
        placeholder="Email"
        v-model="user.email">
      </b-form-input>

      <b-form-input
        type="password"
        name="password"
        placeholder="Password"
        v-model="user.password">
      </b-form-input>

      <b-button @click.native="submit(user)">
        Login
      </b-button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
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
    }
  }
</script>

<style scoped lang="stylus">
  .login
    width: 600px
    margin: 0 auto
    margin-top: 100px
    text-align: center
</style>
