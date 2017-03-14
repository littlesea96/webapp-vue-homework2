<template>
  <div class="new-post">
    <h2>New Post</h2>
    <el-form label-width="80px">
      <el-form-item label="Title">
        <el-input placeholder="Title" v-model="post.name"></el-input>
      </el-form-item>

      <el-form-item label="Content">
        <el-input type="textarea" :rows="4" placeholder="Content.." v-model="post.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="createPost">create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style>
  .new-post {
    width: 55%;
    margin: auto;
  }
</style>
