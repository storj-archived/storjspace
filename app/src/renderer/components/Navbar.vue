<template lang="html">
  <div>
    <b-navbar toggleable type="inverse" variant="primary">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="landing-page">
        <span><img src="../static/logos/logo-white.svg" height="40px" alt="Storj Labs"></span><span class="logo-text"> Space</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item to="dashboard">Dashboard</b-nav-item>
        <b-nav-item to="buckets">Buckets</b-nav-item>
        <b-nav-item to="upload">Upload Files</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item-dropdown right-alignment>

          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>

          <b-dropdown-item to="settings">Settings</b-dropdown-item>
          <b-dropdown-item to="#" >Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      user: {
        _id: '',
        email: ''
      }
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="stylus">
.logo-text
  font-size: 16px
</style>
