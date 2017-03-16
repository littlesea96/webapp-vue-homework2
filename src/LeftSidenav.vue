<template lang="html">
  <div class="top-nav-bar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{ name: 'Posts.index' }">
          <i class="el-icon-document"></i>
          <span>Posts</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'Posts.new' }">
          <i class="el-icon-plus"></i>
          <span>Add Post</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3" @click.native="logout">
        <span>Logout</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import UsersApi from '@/api/users.js'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      UsersApi.logout()
    }
  }
}

// export default {
//   methods: {
//     toggleLeftSidenav () {
//       this.$refs.leftSidenav.toggle()
//     },
//     logout () {
//       UsersApi.logout()
//     }
//   }
// }
</script>

<style lang="css">
  a {
    text-decoration: none !important;
  }
</style>
