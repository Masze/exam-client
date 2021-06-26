<template>
<Header :activeIndex="activeIndex" />
  <div>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="6"
        ><div class="fc_button" @click="handleClick('/exam')">
          参加考试
        </div></el-col
      >
      <el-col :span="6"
        ><div class="fc_button" @click="handleClick('/wrongQuestion')">
          我的错题
        </div></el-col
      >
      <el-col :span="6"
        ><div class="fc_button" @click="handleClick('/questionBank')">
          备考题库
        </div></el-col
      >
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@components/Header.vue";

export default {
  data() {
    return {};
  },
  components: {Header},
  computed: {},
  methods: {
    handleClick(path) {
      this.$store.state.activeIndex = path;
      this.$router.push(path);
    },
  },
  mounted() {},
};
</script>
<style>
.fc_button {
  box-shadow: inset 0 0 0 3000px rgb(255 255 255 / 30%);
  margin: 50px 15px 15px 15px;
  background-color: #409eff87;
  height: 350px;
  font-size: 20px;
}
</style>
