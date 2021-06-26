<template>
  <Header :activeIndex="activeIndex" />
  <div>QuestionBank</div>
</template>

<script>
import Header from "@components/Header.vue";
export default {
  data() {
    return {};
  },
  components: {Header},
  created() {
    this.$store.state.activeIndex = "/questionBank";
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
