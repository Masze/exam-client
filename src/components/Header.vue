<template>
  <div class="header">
    <el-row>
      <el-col :span="4" style="text-align: center; line-height: 60px">
        <h1>
          <a href="#/zh-CN" class="">
            <img 
              src="../assets/img/logo.jpg"
              alt="logo"
              class="logo"
            />
          </a>
        </h1>
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex"
          active-text-color="#409EFF"
          class="el-menu-demo"
          mode="horizontal"
          router="true"
          @select="handleSelect"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/exam">考试</el-menu-item>
          <el-menu-item index="/wrongQuestion">错题</el-menu-item>
          <el-menu-item index="/questionBank">题库</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <div class="header-right">
          <div class="header-user-con">
            <!-- 用户头像 -->
            <div class="user-avator">
              <img src="../assets/img/img.jpg" />
            </div>
            <!-- 用户名下拉菜单 -->
            <el-dropdown
              class="user-name"
              trigger="click"
              @command="handleCommand"
            >
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item divided command="loginout">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="line"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    username() {
      let username = sessionStorage.getItem("userName");
      return username ? username : this.name;
    },
    activeIndex() {
      return "/";
    },
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.removeItem("userName");
        this.$router.push("/login");
      }
    },
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  height: 60px;
  align-items: center;
  font-size: 22px;
  padding: 0 12px 0 12px;
}

.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 60px;
  align-items: center;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin: 0 20px 0 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.el-menu-item {
  border-bottom: none !important;
  font-size: 22px !important;
}
.logo{
  height: 60px;
}
</style>
