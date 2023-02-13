<template>
  <section class="home">
    <div class="main-slider">
      <img src="@/assets/images/Slide_1.png" />
      <img src="@/assets/images/Slide_2.png" />
      <img src="@/assets/images/Slide_3.png" />
      <div class="text">
        <h1 class="name">{{ this.getSlidetext.name }}</h1>
        <p class="ep">
          Episodes
          <span>{{ this.getSlidetext.ep }}</span>
        </p>
      </div>
      <ul class="bullets">
        <li @click="slideByBullets(0)" class="active"></li>
        <li @click="slideByBullets(1)"></li>
        <li @click="slideByBullets(2)"></li>
      </ul>
    </div>
    <!-- Fixed Animes -->
    <global-section class="fixed-anime" ti="Fixed Anime">
      <template v-slot:special>
        <div class="arrows">
          <i @click="LeftFA()" class="left fa-solid fa-angle-left fa-fw"></i>
          <i @click="rightFA()" class="right fa-solid fa-angle-right fa-fw"></i>
        </div>
      </template>
      <template v-slot:cards-box>
        <div class="arrow-cards">
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
          <anime-card
            :shEp="false"
            class="disappear anime"
            na="Classroom Elite"
          >
            <img src="@/assets/images/AnF_5.jpg" />
          </anime-card>
          <anime-card :shEp="false" class="disappear anime">
            <img src="@/assets/images/AnF_6.jpg" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- Fixed Episeodes -->
    <global-section
      class="fixed-episodes"
      ti="Fixed Episodes"
      bg="var(--vd-blue)"
      co="var(--vd-blue)"
    >
      <template v-slot:special>
        <div class="more btn">More Episodes</div>
      </template>
      <template v-slot:cards-box>
        <div class="grid-cards">
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Isekai Kenja"
            ep="1"
          >
            <img src="@/assets/images/EpF_1.jpg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="attack no titan"
            ep="2"
          >
            <img src="@/assets/images/EpF_2.jpg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="over flow"
            ep="3"
          >
            <img src="@/assets/images/EpF_3.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="naruto"
            ep="4"
          >
            <img src="@/assets/images/EpF_4.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="benryia"
            ep="5"
          >
            <img src="@/assets/images/EpF_5.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="black clover"
            ep="6"
          >
            <img src="@/assets/images/EpF_6.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="classroom elite"
            ep="7"
          >
            <img src="@/assets/images/EpF_7.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Danmachi"
            ep="8"
          >
            <img src="@/assets/images/EpF_8.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Dr Stone"
            ep="9"
          >
            <img src="@/assets/images/EpF_9.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Eiyuuou"
            ep="10"
          >
            <img src="@/assets/images/EpF_10.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="fuemetsu"
            ep="11"
          >
            <img src="@/assets/images/EpF_11.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Gaikotsu"
            ep="12"
          >
            <img src="@/assets/images/EpF_12.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Gate"
            ep="13"
          >
            <img src="@/assets/images/EpF_13.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Genlitsu shugi"
            ep="14"
          >
            <img src="@/assets/images/EpF_14.jpg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Hachi-nan"
            ep="15"
          >
            <img src="@/assets/images/EpF_15.jpg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="high school DxD"
            ep="16"
          >
            <img src="@/assets/images/EpF_16.jpg" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- Most Viewed -->
    <global-section class="most-viewed" ti="most viewed">
      <template v-slot:special>
        <div class="arrows">
          <i @click="LeftMV()" class="left fa-solid fa-angle-left fa-fw"></i>
          <i @click="rightMV()" class="right fa-solid fa-angle-right fa-fw"></i>
        </div>
      </template>
      <template v-slot:cards-box>
        <div class="arrow-cards">
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
          <anime-card
            :shEp="false"
            class="disappear anime"
            na="i want take you"
          >
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
        </div>
      </template>
    </global-section>
    <!-- Last Episodes -->
    <global-section
      class="last-episodes"
      ti="last episodes"
      bg="var(--vd-blue)"
      co="var(--vd-blue)"
    >
      <template v-slot:special>
        <div class="more btn">More Episodes</div>
      </template>
      <template v-slot:cards-box>
        <div class="grid-cards">
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Isekai yakkyoku"
            ep="1"
          >
            <img src="@/assets/images/LaEp_1.jpg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="itai no"
            ep="2"
          >
            <img src="@/assets/images/LaEp_2.jpeg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="kami tachi no hirowareta otoko"
            ep="3"
          >
            <img src="@/assets/images/LaEp_3.jpg" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="Kanojo okarishimasu"
            ep="4"
          >
            <img src="@/assets/images/LaEp_4.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="kimetsu no yaiba"
            ep="5"
          >
            <img src="@/assets/images/LaEp_5.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="leadale bo daichi nite"
            ep="6"
          >
            <img src="@/assets/images/LaEp_6.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="mairimashita iruma kun"
            ep="7"
          >
            <img src="@/assets/images/LaEp_7.png" />
          </anime-card>
          <anime-card
            :shSt="false"
            :shTy="false"
            bg="var(--d-blue)"
            na="maou gakuin"
            ep="8"
          >
            <img src="@/assets/images/LaEp_8.png" />
          </anime-card>
        </div>
      </template>
    </global-section>
    <!-- last Anime -->
    <global-section class="last-anime" ti="last anime">
      <template v-slot:special>
        <div class="arrows">
          <i @click="LeftLA()" class="left fa-solid fa-angle-left fa-fw"></i>
          <i @click="rightLA()" class="right fa-solid fa-angle-right fa-fw"></i>
        </div>
      </template>
      <template v-slot:cards-box>
        <div class="arrow-cards">
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
          <anime-card
            :shEp="false"
            class="disappear anime"
            na="ore dake haireru"
          >
            <img src="@/assets/images/LaA_4.png" />
          </anime-card>
          <anime-card :shEp="false" class="disappear anime" na="ningen fushin">
            <img src="@/assets/images/LaA_5.png" />
          </anime-card>
          <anime-card
            :shEp="false"
            class="disappear anime"
            na="princess connect"
          >
            <img src="@/assets/images/LaA_6.png" />
          </anime-card>
        </div>
      </template>
    </global-section>
  </section>
</template>

<script>
import AnimeCard from "@/components/AnimeCrad.vue";
import GlobalSection from "@/components/GlobalSection.vue";
export default {
  name: "TheHome",
  components: {
    AnimeCard,
    GlobalSection,
  },
  created() {
    // this.autoSlide();
    this.display();
  },
  computed: {
    getSlidetext() {
      return this.$store.state.slidetext[this.$store.state.cur];
    },
  },
  data() {
    return {
      curFA: 0,
      curMV: 0,
      curLA: 0,
    };
  },
  methods: {
    slideByBullets($cur) {
      const imgs = document.querySelectorAll(".main-slider img");
      const bullets = document.querySelectorAll(".main-slider .bullets li");
      imgs.forEach((img) => img.classList.add("hidden"));
      imgs[$cur].classList.remove("hidden");
      //
      bullets.forEach((bullet) => bullet.classList.remove("active"));
      bullets[$cur].classList.add("active");
      //
      this.$store.dispatch("increment", $cur);
    },
    autoSlide() {
      setTimeout(() => {
        let images = document.querySelectorAll(".main-slider img");
        let current = 0;
        //
        function displayCurrent($current) {
          images.forEach((image) => {
            image.classList.add("hidden");
          });
          images[$current].classList.remove("hidden");
        }
        displayCurrent(0);
        //
        setInterval(() => {
          if (++current === images.length) {
            current = 0;
          }
          displayCurrent(current);
          this.slideByBullets(current);
        }, 3000);
      }, 0);
    },
    orderALl($cards, $current, $left, $right) {
      let endCards = 4;
      $cards.forEach((card) => {
        card.classList.add("disappear");
      });
      if (window.innerWidth >= 768) {
        $cards[$current].classList.remove("disappear");
        $cards[$current + 1].classList.remove("disappear");
        $cards[$current + 2].classList.remove("disappear");
        $cards[$current + 3].classList.remove("disappear");
      } else {
        $cards[$current].classList.remove("disappear");
        $cards[$current + 1].classList.remove("disappear");
        endCards = 2;
      }
      if ($current === 0) {
        $left.classList.add("disabled");
      } else {
        $left.classList.remove("disabled");
      }
      if ($current === $cards.length - endCards) {
        $right.classList.add("disabled");
      } else {
        $right.classList.remove("disabled");
      }
    },
    display() {
      setTimeout(() => {
        let cardsFA = document.querySelectorAll(".fixed-anime .card");
        let leftFA = document.querySelector(".fixed-anime .left");
        let rightFA = document.querySelector(".fixed-anime .right");
        this.orderALl(cardsFA, this.curFA, leftFA, rightFA);
        let cardsMV = document.querySelectorAll(".most-viewed .card");
        let leftMV = document.querySelector(".most-viewed .left");
        let rightMV = document.querySelector(".most-viewed .right");
        this.orderALl(cardsMV, this.curMV, leftMV, rightMV);
        let cardsLA = document.querySelectorAll(".last-anime .card");
        let leftLA = document.querySelector(".last-anime .left");
        let rightLA = document.querySelector(".last-anime .right");
        this.orderALl(cardsLA, this.curLA, leftLA, rightLA);
      }, 0);
    },
    LeftFA() {
      this.curFA--;
      this.display();
    },
    rightFA() {
      this.curFA++;
      this.display();
    },
    LeftMV() {
      this.curMV--;
      this.display();
    },
    rightMV() {
      this.curMV++;
      this.display();
    },
    LeftLA() {
      this.curLA--;
      this.display();
    },
    rightLA() {
      this.curLA++;
      this.display();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
.home {
  position: relative;
  z-index: -1;
}
.main-slider {
  height: 40vh;
  position: relative;
  z-index: 0;
  @include max-mobile {
    height: 30vh;
  }
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--s-white);
    text-align: center;
    z-index: -1;
    .name {
      font-size: 50px;
      @include max-mobile {
        font-size: 30px;
      }
    }
    .ep {
      font-size: 20px;
      font-weight: bold;
      @include max-mobile {
        font-size: 15px;
      }
    }
  }
  .bullets {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    li {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--white);
      margin: 0 3px;
      &.active {
        background-color: var(--l-blue);
      }
      @include max-mobile {
        width: 10px;
        height: 10px;
      }
    }
  }
}
// global style
</style>
