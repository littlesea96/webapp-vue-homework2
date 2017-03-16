<template>
  <div class="post">
    <span>Title: {{ post.name }}</span>
    <p>Content: {{ post.content }}</p>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
