<template lang="html">
  <div>
    <div class="upload">
      <h1>Upload Files</h1>
    </div>
    <div class="upload">
      <b-form-file multiple></b-form-file>
    </div>
    <div class="upload file-list">

    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadView',
  components: {},
  data () {
    return {
      files: []
    }
  },
  mounted () {
    console.log('uploader ready', this.files)
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  .upload
    margin-top: 40px
    display: flex
    justify-content: center
    align-content: center

  .file-list
    margin: 20px
    display: flex
    justify-content: center
    align-content: center
</style>
