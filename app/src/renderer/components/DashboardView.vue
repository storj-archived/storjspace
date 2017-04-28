<template lang="html">
    <div class="dashboard">
      <div class="header">
        <h1>Dashboard</h1>
      </div>

      <div class="row metrics">
          <div class="col storage">
            <b-card header="Storage"
              class="mb-2">
              <h1>{{ storage }}</h1>
            </b-card>
          </div>

          <div class="col bandwidth">
            <b-card header="Storage"
              class="mb-2">
              <h1>{{ bandwidth }}</h1>
            </b-card>
          </div>
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
  .dashboard
    margin: 20px

  .header
    margin-top: 40px
    text-align: center

  .storage .bandwidth
    text-align: center

  .metrics
    margin-top: 40px
</style>
