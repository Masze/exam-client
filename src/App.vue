<template>
  <Header :activeIndex="activeIndex" />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  computed: {
    activeIndex() {
      return this.$store.state.activeIndex ?  this.$store.state.activeIndex : "/" ;
    },
  },
};
</script>

<style>
@import "./assets/css/main.css";
</style>