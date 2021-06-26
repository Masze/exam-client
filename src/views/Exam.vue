<template>
  <Header :activeIndex="activeIndex" />
  <div>exam</div>
</template>

<script>
import Header from "@components/Header";

import { getData } from "@api/index";
export default {
  data() {
    return {};
  },
  components: {Header},
  computed: {},
  created() {
    this.$store.state.activeIndex = "/exam";
  },
  methods: {},
  mounted() {
    this.$prompt("请输入本次考试题目数量", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      inputPattern: /^[0-9]+$/,
      inputErrorMessage: "数字格式不正确",
    })
      .then(({ value }) => {

        
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消输入",
        }).then(({ value }) => {
          //取消返回首页
          this.$router.push("/");
        });
      });
  },
};
</script>
