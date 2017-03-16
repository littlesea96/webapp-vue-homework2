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
    padding-top: 5%;
  }
</style>
