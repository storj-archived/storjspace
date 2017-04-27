<template lang="html">
  <div class="login">
    <h1>Upload Files</h1>
      <b-form-file multiple></b-form-file>
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
  }
}
</script>

<style lang="stylus">

</style>
