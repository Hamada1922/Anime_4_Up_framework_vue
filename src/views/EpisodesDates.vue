<template>
  <section class="episodes-dates">
    <h2 class="page-title">Dates Of Display Anime Episodes</h2>
    <!-- saturday -->
    <global-section class="day saturday" ti="saturday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card :shEp="false" class="anime" na="one piece">
            <img src="@/assets/images/AnF_1.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="over lord">
            <img src="@/assets/images/AnF_2.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="Shinka no Mi">
            <img src="@/assets/images/AnF_3.jpg" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- sunday -->
    <global-section class="day sunday" ti="sunday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card :shEp="false" class="anime" na="Kage no">
            <img src="@/assets/images/AnF_4.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="Classroom Elite">
            <img src="@/assets/images/AnF_5.jpg" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- monday -->
    <global-section class="day monday" ti="monday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card
            :shEp="false"
            class="anime"
            na="How not summom demon lord"
          >
            <img src="@/assets/images/MoV_1.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="hyouken">
            <img src="@/assets/images/MoV_2.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="anime">
            <img src="@/assets/images/AnF_6.jpg" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- tuesday -->
    <global-section class="day tuesday" ti="tuesday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card :shEp="false" class="anime" na="i want take you">
            <img src="@/assets/images/MoV_3.png" />
          </anime-card>
          <anime-card
            :shEp="false"
            class="anime"
            na="isekai meikyuu de harem wo"
          >
            <img src="@/assets/images/MoV_4.png" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- wednesday -->
    <global-section class="day wednesday" ti="wednesday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card :shEp="false" class="anime" na="isekai nobiri nouka">
            <img src="@/assets/images/MoV_5.jpg" />
          </anime-card>
          <anime-card
            :shEp="false"
            class="anime"
            na="isekai wa smart phone to tomt no"
          >
            <img src="@/assets/images/AnF_6.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="tensi shitra slime">
            <img src="@/assets/images/LaA_1.png" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- tursday -->
    <global-section class="day tursday" ti="tursday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card :shEp="false" class="anime" na="ningen fushin">
            <img src="@/assets/images/LaA_5.png" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="princess connect">
            <img src="@/assets/images/LaA_6.png" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- friday -->
    <global-section class="day friday" ti="friday">
      <template v-slot:cards-box>
        <div class="arrow-cards">
          <anime-card :shEp="false" class="anime" na="tate no yuusha">
            <img src="@/assets/images/LaA_2.png" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="Tokyo Ghoal">
            <img src="@/assets/images/LaA_3.png" />
          </anime-card>
          <anime-card :shEp="false" class="anime" na="ore dake haireru">
            <img src="@/assets/images/LaA_4.png" />
          </anime-card>
        </div>
      </template>
    </global-section>
  </section>
</template>

<script>
import GlobalSection from "@/components/GlobalSection.vue";
import AnimeCard from "@/components/AnimeCrad.vue";
export default {
  name: "EpisodesDates",
  components: {
    GlobalSection,
    AnimeCard,
  },
};
</script>
<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
.episodes-dates {
  min-height: 70vh;
  background-color: var(--d-blue);
  position: relative;
  z-index: -1;
}
</style>
