<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
export default {
  name: "app",
  components: { Header, Footer },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
