<template>
  <div class="sign-in">
    <h2>SignIn</h2>
    <el-form label-width="80px">
      <el-form-item label="Email">
        <el-input placeholder="Email" v-model="email"></el-input>
      </el-form-item>

      <el-form-item label="Password">
        <el-input placeholder="Password" v-model="password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click.native="login">Login</el-button>
      </el-form-item>
    </el-form>

    <!-- <md-list class="md-double-line">
      <md-subheader class="md-inset">New Post</md-subheader>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Email</label>
            <md-input v-model="email" placeholder=""></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Password</label>
            <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="login"></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="login">Login</md-button>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list> -->
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
        router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style>
  .sign-in {
    width: 35%;
    margin: auto;
    /*text-align: center;*/
  }
</style>
