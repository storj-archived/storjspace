<template lang="html">
    <div class="buckets">
      <div class="header">
        <h1>Buckets</h1>
      </div>

      <div class="bucket-list container">
        <b-list-group>
          <b-list-group-item to="#" v-for="bucket in buckets">
            {{ bucket }}
          </b-list-group-item>
        </b-list-group>
      </div>

    </div>
</template>

<script>
export default {
  name: 'BucketsView',
  data () {
    return {
      buckets: [
        { _id: 1, name: 'bucket 1' },
        { _id: 2, name: 'bucket 2' },
        { _id: 3, name: 'bucket 3' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  .bucket-list
    margin-top: 40px
</style>
