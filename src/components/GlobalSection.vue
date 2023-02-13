<template>
  <section :style="{ background: bg }" class="section">
    <div class="container">
      <div class="head">
        <div class="title">{{ ti }}</div>
        <slot name="special"></slot>
      </div>
      <slot name="cards-box"></slot>
    </div>
    <div class="tail" :style="{ color: co }"></div>
  </section>
</template>

<script>
export default {
  name: "SectionInHome",
  props: {
    ti: String,
    bg: {
      type: String,
      default() {
        return "var(--d-blue)";
      },
    },
    co: {
      type: String,
      default() {
        return "var(--d-blue)";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
.section {
  padding: 30px 0;
  position: relative;
  color: var(--s-white);
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      background-color: var(--l-blue);
      padding: 10px 15px;
      border-radius: 20px;
      font-weight: bold;
      @include max-mobile {
        font-size: 12px;
      }
    }
  }
  .tail {
    position: absolute;
    border-top: 50px solid;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    top: 100%;
    left: 50%;
    z-index: 1;
    @include prefix(transform, translateX(-50%), webkit moz);
    @include max-mobile {
      border-top-width: 30px;
      border-left-width: 50px;
      border-right-width: 50px;
    }
  }
}
</style>
