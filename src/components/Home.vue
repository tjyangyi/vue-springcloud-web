<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">工作台</el-menu-item>
      <el-menu-item index="3">警情</el-menu-item>
      <el-menu-item index="4">案件</el-menu-item>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        switch (key) {
          case '1':
            this.$router.push('/Page1');
            break;
          case '2':
            this.$router.push('/Page2')
            break;
          case '3':
            this.$router.push('/Page3')
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>
