<template lang="html">
  <div>

    <b-navbar toggleable type="inverse" variant="primary">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span>StorjSpace</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item>Buckets</b-nav-item>
        <b-nav-item>Settings</b-nav-item>
        <b-nav-item>Dashboard</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item-dropdown right-alignment>

          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>

          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="css">
</style>
