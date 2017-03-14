<template>
  <div class="posts">
    <h1>Posts</h1>
    <el-table :data="posts" style="width: 100%" @row-click="handleClick">
      <el-table-column width='95'>
        <template scope='img'>
          <img id="note" src="../../assets/post.png">
        </template>
      </el-table-column>
      <el-table-column label="Post">
        <template scope='scope'>
          <iccs340-post :post='scope.row'></iccs340-post>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'posts',
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  },
  components: {
    Iccs340Post: require('./Post')
  },
  methods: {
    handleClick (row) {
      router.push(this.$route.path + '/' + row.id)
    }
  }
}
</script>

<style scoped>
  .posts {
    /*padding-top: 1%;*/
    width: 80%;
    margin: auto;
  }

  #note {
    max-width: 50px;
    max-height: 50px;
  }
</style>
