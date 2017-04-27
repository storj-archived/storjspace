<template lang="html">
    <div class="buckets">
        <h1>Buckets</h1>


    </div>
</template>

<script>
export default {
  name: 'BucketsView',
  data () {
    return {
      files: [
        { _id: 1, name: 'bucket 1' },
        { _id: 2, name: 'bucket 2' },
        { _id: 3, name: 'bucket 3' }
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>
