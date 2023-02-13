<template>
  <section class="search">
    <div class="container">
      <h2 class="page-title" @click="test()">
        search result about <span>{{ getSearchText }}</span>
      </h2>
      <div class="arrow-cards">
        <div class="not-found disappear">
          <i class="fa-solid fa-face-frown"></i>
          <p><span>SORRY</span>, content not found!</p>
        </div>
        <anime-card :shEp="false" class="disappear anime" na="one piece">
          <img src="@/assets/images/AnF_1.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="over lord">
          <img src="@/assets/images/AnF_2.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="Shinka no Mi">
          <img src="@/assets/images/AnF_3.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="Kage no">
          <img src="@/assets/images/AnF_4.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="Classroom Elite">
          <img src="@/assets/images/AnF_5.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime">
          <img src="@/assets/images/AnF_6.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="disappear anime"
          na="How not summom demon lord"
        >
          <img src="@/assets/images/MoV_1.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="hyouken">
          <img src="@/assets/images/MoV_2.jpg" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="i want take you">
          <img src="@/assets/images/MoV_3.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="disappear anime"
          na="isekai meikyuu de harem wo"
        >
          <img src="@/assets/images/MoV_4.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="disappear anime"
          na="isekai nobiri nouka"
        >
          <img src="@/assets/images/MoV_5.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="disappear anime"
          na="isekai wa smart phone to tomt no"
        >
          <img src="@/assets/images/AnF_6.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="disappear anime"
          na="tensi shitra slime"
        >
          <img src="@/assets/images/LaA_1.png" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="tate no yuusha">
          <img src="@/assets/images/LaA_2.png" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="Tokyo Ghoal">
          <img src="@/assets/images/LaA_3.png" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="ore dake haireru">
          <img src="@/assets/images/LaA_4.png" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="ningen fushin">
          <img src="@/assets/images/LaA_5.png" />
        </anime-card>
        <anime-card :shEp="false" class="disappear anime" na="princess connect">
          <img src="@/assets/images/LaA_6.png" />
        </anime-card>
      </div>
    </div>
  </section>
</template>

<script>
import AnimeCard from "@/components/AnimeCrad.vue";
export default {
  name: "SearchView",
  components: {
    AnimeCard,
  },
  methods: {
    test(text) {
      setTimeout(() => {
        let check = [];
        let animes = document.querySelectorAll(".anime");
        let notFound = document.querySelector(".not-found");
        animes.forEach((anime) => {
          if (anime.dataset.name.toLowerCase().includes(text.toLowerCase())) {
            anime.classList.remove("disappear");
            check.push(1);
          } else {
            anime.classList.add("disappear");
          }
          check.length > 0
            ? notFound.classList.add("disappear")
            : notFound.classList.remove("disappear");
        });
      }, 0);
    },
  },
  computed: {
    getSearchText() {
      return this.$store.state.searchText;
    },
  },
  watch: {
    getSearchText(value) {
      this.test(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  z-index: -1;
  background-color: var(--d-blue);
  min-height: 70vh;
  .page-title {
    span {
      color: var(--l-blue);
    }
  }
}
</style>
