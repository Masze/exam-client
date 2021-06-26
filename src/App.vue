<template>
  <router-view></router-view>
</template>

<script>

export default {
  components: {
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