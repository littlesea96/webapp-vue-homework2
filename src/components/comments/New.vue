<template>
  <div class="new-post">
    <el-form>

      <el-form-item>
        <el-input type="textarea"  :rows="2" placeholder="comment.." v-model="comment.content"></el-input>
        <el-button id="comment-button" type="primary" @click.native="createComment">add</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
  .el-textarea {
    width: 80% !important;
    margin-right: 15px;
  }
  #comment-button {
    margin-bottom: 10px;
  }
</style>
