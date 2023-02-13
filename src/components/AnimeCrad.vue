<template>
  <div
    class="card"
    :data-name="na"
    :data-class="cl"
    :data-status="st"
    :data-type="ty"
    :data-season="se"
    :style="{ background: bg, color: co }"
  >
    <div class="image">
      <slot></slot>
      <div class="overlay-1"></div>
      <div class="overlay-2"></div>
    </div>
    <span v-show="shSt" class="status">{{ st }}</span>
    <div class="text">
      <span v-show="shEp" class="ep">
        episode <span>{{ ep }}</span>
      </span>
      <span v-show="shTy" class="type">{{ ty }}</span>
      <h5 class="name">{{ na }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeCard",
  props: {
    na: {
      type: String,
      default() {
        return "Kenja No Magi";
      },
    },
    cl: {
      type: String,
      default() {
        return "adventure";
      },
    },
    st: {
      type: String,
      default() {
        return "complete";
      },
    },
    ty: {
      type: String,
      default() {
        return "TV";
      },
    },
    se: {
      type: String,
      default() {
        return "2023";
      },
    },
    ep: {
      type: String,
      default() {
        return "0";
      },
    },
    bg: {
      type: String,
      default() {
        return "var(--vd-blue)";
      },
    },
    co: {
      type: String,
      default() {
        return "var(--white)";
      },
    },
    shSt: {
      type: Boolean,
      default() {
        return true;
      },
    },
    shEp: {
      type: Boolean,
      default() {
        return true;
      },
    },
    shTy: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/css/scss/_mixins.scss";
.card {
  overflow: hidden;
  border-radius: 6px;
  text-align: center;
  position: relative;
  .image {
    position: relative;
    overflow: hidden;
    .overlay-1,
    .overlay-2 {
      position: absolute;
      width: 0;
      height: 50%;
      background-color: rgba(#029dbc, 0.1);
      transition: var(--trans);
    }
    .overlay-1 {
      top: 0;
      left: 0;
    }
    .overlay-2 {
      bottom: 0;
      right: 0;
    }
    &:hover {
      .overlay-1,
      .overlay-2 {
        width: 100%;
      }
    }
  }
  .status {
    position: absolute;
    background-color: inherit;
    color: inherit;
    top: 2%;
    right: 5%;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 13px;
  }
  .text {
    padding: 15px;
    position: relative;
    line-height: 1.4;
    min-height: 60px;
    @include max-mobile {
      min-height: 40px;
    }
    .ep,
    .type {
      position: absolute;
      font-weight: bold;
      color: var(--s-white);
    }
    .ep {
      top: -40px;
      transform: translateX(-50%);
    }
    .type {
      background-color: var(--orange);
      top: -30%;
      left: 5%;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 12px;
      @include max-mobile {
        font-size: 10px;
      }
    }
  }
  @include max-mobile {
    .name,
    .status {
      font-size: 10px;
    }
  }
}
</style>
