<template lang="html">
    <div class="settings">
        <div class="header">
            <h1>Settings</h1>
            User: {{ user }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SettingsView',
  data () {
    return {
      user: {}
    }
  },
  methods: {},
  computed: mapState({
    user: state => state.user
  }),
  created () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="css">
</style>
