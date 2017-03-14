<template>
  <div class="post">
    <el-card class="box-card">
      <div class="each-post">
        <iccs340-post :post='post'></iccs340-post>
      </div>
    </el-card>

    <h2 id="comment">Comments</h2>
    <div v-for="comment in comments" :key="comment.id">
      <el-card class="box-card">
        <div class="each-comment">
          <iccs340-comment :comment='comment'></iccs340-comment>
        </div>
      </el-card>
    </div>
    <div class="add-comment">
      <iccs340-new-comment :post='post'></iccs340-new-comment>
    </div>

    <!-- <md-list class="md-triple-line">
      <iccs340-post :post='post'></iccs340-post>
    </md-list>

    <md-list v-for="comment in comments" :key="comment.id">
      <iccs340-comment :comment='comment'></iccs340-comment>
    </md-list>
    <iccs340-new-comment :post='post'></iccs340-new-comment> -->
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'

export default {
  name: 'post',
  components: {
    Iccs340Post: require('./Post'),
    Iccs340Comment: require('../comments/Comment'),
    Iccs340NewComment: require('../comments/New')
  },
  data () {
    return {
      post: {},
      comments: [],
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      PostsApi.getPost(this.$route.params.id, _post => {
        this.post = _post
        CommentsApi.getComments(_post.id, _comments => {
          this.comments = _comments
        })
      })
    }
  }
}
</script>

<style scoped>
  .each-post {
    margin: auto;
    width: 75%;
  }

  .el-card {
    width: 75%;
    margin-top: 3% !important;
    margin: auto;
    height:
  }

  #comment {
    margin-left: 12%;
  }

  .add-comment {
    margin-top: 3% !important;
    margin: auto;
  }
</style>
