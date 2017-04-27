<template lang="html">
    <div class="dashboard">
      <h1>Dashboard</h1>

      <div class="storage">
          Storage: {{storage}}
      </div>

      <div class="bandwidth">
          Bandwidth: {{bandwidth}}
      </div>

      <div class="transactions">
          Transactions:
          {{transactions}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'DashboardView',
  components: {},
  data () {
    return {
      user: {},
      bandwidth: 0,
      storage: 0,
      balance: 0,
      card_info: {},
      transactions: []
    }
  }
}
</script>

<style lang="stylus">

</style>
