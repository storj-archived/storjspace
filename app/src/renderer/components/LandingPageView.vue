<template>
  <div>
    <div class="login">
      <h1>Login to Storj</h1>

      <b-form-input
        type="text"
        placeholder="Email">
      </b-form-input>

      <b-form-input
        type="password"
        placeholder="Password">
      </b-form-input>

      <b-button>
        Login
      </b-button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'landing-page'
  }
</script>

<style scoped lang="stylus">
  .login
    width: 600px
    margin: 0 auto
    margin-top: 300px
    text-align: center
</style>
