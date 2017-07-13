<template lang="html">
    <div class="buckets">
      <div class="header">
        <h1>Buckets</h1>
      </div>

      <div class="bucket-list container">
        <b-list-group>
            <b-list-group-item :to="{name: 'files', params: { bucketId: bucket._id}}" v-for="bucket in buckets">
              {{ bucket }}
            </b-list-group-item>
        </b-list-group>
      </div>

    </div>
</template>

<script>
import Storj from 'vendor/storj.es5.js'
import storage from 'electron-json-storage'

const email = storage.get('user', function (err, user) {
  if (err) console.log(`Error: ${err}`)
  console.log('user: ', user)
  return user.email
})

const key = storage.get('keypair', function (err, keypair) {
  if (err) console.log(`Error: ${err}`)
  console.log('keypair privkey', keypair.privkey)
  return keypair.privkey
})

const encryptionKey = storage.get('keypair', function (err, keypair) {
  if (err) console.log(`Error: ${err}`)
  console.log('keypair', keypair.encryptionKey)
  return keypair.encryptionKey
})

const storj = new Storj({
  basicAuth: {
    email: email,
    key: key,
    encryptionKey: encryptionKey
  }
})

export default {
  name: 'BucketsView',
  methods: {
    goToFiles (bucketId) {
      console.log('goToFiles', bucketId)
      this.$router.push({name: 'files', params: { bucketId: bucketId }})
    }
  },
  computed: {
    buckets: () => {
      return storj.getBucketList(function (err, buckets) {
        if (err) console.log(`Error getting buckets: ${err}`)
        return buckets
      })
    }
  }
}
</script>

<style lang="stylus">
  .bucket-list
    margin-top: 40px
</style>
