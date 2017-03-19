<template>
  <div class="post">
    <p>User: {{ post.user.email }}</p>
    <p>Title: {{ post.name }}</p>
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
