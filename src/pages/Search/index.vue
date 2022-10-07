<template>
  <div class="search">
    <TypeNav />
    <h2>
      {{$route.query.search}}
    </h2>
    我是搜索
  </div>
</template>

<script>
export default {
  name: 'search',

  data () {
    return {

    };
  },

  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>
