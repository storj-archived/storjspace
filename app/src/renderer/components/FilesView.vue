<template lang="html">
    <div class="files">
        <div class="header">
            Files - {{bucket}}
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      bucket_name: 'bucket test 123',
      files: [
        { id: 1, name: 'test file 1' },
        { id: 2, name: 'test file 2' },
        { id: 3, name: 'test file 3' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
