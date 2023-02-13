<template>
  <main-header />
  <router-view />
  <main-footer />
</template>

<script>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
  },
  created() {
    this.checkStorage();
  },
  data: function () {
    return {};
  },
  methods: {
    checkStorage() {
      this.$store.dispatch("checkStorage");
    },
  },
  computed: {},
};
</script>

<style lang="scss">
@import "@/css/all.min.css";
@import "@/css/normalize.css";
@import "@/css/mian.scss";
</style>
