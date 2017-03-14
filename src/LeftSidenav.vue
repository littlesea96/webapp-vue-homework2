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
        <!-- <i class="el-icon-document"></i> -->
        <span>Logout</span>
      </el-menu-item>
    </el-menu>
  </div>

  <!-- <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Homework 2</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'Posts.index' }">
            <md-icon>home</md-icon>
            <span>Posts</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <router-link :to="{ name: 'Posts.new' }">
            <md-icon>note_add</md-icon>
            <span>Add post</span>
          </router-link>
        </md-list-item>

        <md-list-item @click.native="logout">
          <md-icon>exit_to_app</md-icon>
          <span>Logout</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div> -->
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
