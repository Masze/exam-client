<template>
  <Header :activeIndex="activeIndex" />
  <div>WrongQuestion</div>
</template>

<script>
import Header from "@components/Header.vue";

export default {
  data() {
    return {};
  },
  components: {Header},
  created() {
    this.$store.state.activeIndex = "/wrongQuestion";
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
