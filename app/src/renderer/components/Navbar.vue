<template lang="html">
  <div> <!-- TODO need to find the class is a reserved keyword error here -->
    <b-navbar toggleable type="inverse" variant="primary">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="dashboard">
        <span><img src="../static/logos/logo-white.svg" height="40px" alt="Storj Labs"></span><span class="logo-text"> Space</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item :to="{ name: 'dashboard' }">Dashboard</b-nav-item>
        <b-nav-item :to="{ name: 'buckets' }">Buckets</b-nav-item>
        <b-nav-item :to="{ name: 'upload' }">Upload Files</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item-dropdown right-alignment>

          <template slot="text">
            <span style="font-weight: bold;">{{ user }}</span>
          </template>

          <b-dropdown-item to="settings">Settings</b-dropdown-item>
          <b-dropdown-item @click.native="logout()" >Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {}
  },
  computed: mapState({
    user: state => state.user
  })
}
</script>

<style lang="stylus">
.logo-text
  font-size: 16px
</style>
