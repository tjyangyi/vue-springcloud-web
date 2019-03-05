<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>我的警情</span>
            </template>
            <el-menu-item index="1-1" @click="level2Click">二级类1</el-menu-item>
            <el-menu-item index="1-2">二级类2</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">关注警情</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">警情库</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">一级分类4</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "page3",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push('/Page3/JQ1');
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      level2Click(e) {
        console.log("level2Click");
      }
    }
  }
</script>

<style scoped>

</style>
