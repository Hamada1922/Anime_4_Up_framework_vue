<template>
  <section class="anime-list">
    <h2 class="title">Anime List</h2>
    <div class="ordering">
      <div class="selections">
        <select
          class="classification"
          v-model="classification"
          @change="sendClass(this.classification)"
        >
          <option value="" disabled selected hidden>Classification</option>
          <option value="adventure">adventure</option>
          <option value="magic">magic</option>
          <option value="demons">demons</option>
          <option value="romance">romance</option>
          <option value="historical">historical</option>
          <option value="super power">super power</option>
        </select>
        <select
          class="status"
          v-model="status"
          @change="sendStatus(this.status)"
        >
          <option value="" disabled selected hidden>Status</option>
          <option value="complete">complete</option>
          <option value="display now">display now</option>
        </select>
        <select class="type" v-model="type" @change="sendType(this.type)">
          <option value="" disabled selected hidden>Type</option>
          <option value="tv">TV</option>
          <option value="movie">movie</option>
          <option value="ONA">ONA</option>
          <option value="special">special</option>
        </select>
        <select
          class="season"
          v-model="season"
          @change="sendSeason(this.season)"
        >
          <option value="" disabled selected hidden>Season</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2022">2021</option>
          <option value="2022">2020</option>
        </select>
      </div>
      <div class="characters">
        <ul>
          <li @click="sendChar('a')">a</li>
          <li @click="sendChar('b')">b</li>
          <li @click="sendChar('c')">c</li>
          <li @click="sendChar('d')">d</li>
          <li @click="sendChar('e')">e</li>
          <li @click="sendChar('f')">f</li>
          <li @click="sendChar('g')">g</li>
          <li @click="sendChar('h')">h</li>
          <li @click="sendChar('i')">i</li>
          <li @click="sendChar('j')">j</li>
          <li @click="sendChar('k')">k</li>
          <li @click="sendChar('l')">l</li>
          <li @click="sendChar('m')">m</li>
          <li @click="sendChar('n')">n</li>
          <li @click="sendChar('o')">o</li>
          <li @click="sendChar('p')">p</li>
          <li @click="sendChar('q')">q</li>
          <li @click="sendChar('r')">r</li>
          <li @click="sendChar('s')">s</li>
          <li @click="sendChar('t')">t</li>
          <li @click="sendChar('u')">u</li>
          <li @click="sendChar('v')">v</li>
          <li @click="sendChar('w')">w</li>
          <li @click="sendChar('x')">x</li>
          <li @click="sendChar('y')">y</li>
          <li @click="sendChar('z')">z</li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="arrow-cards">
        <div class="not-found disappear">
          <i class="fa-solid fa-face-frown"></i>
          <p><span>SORRY</span>, content not found!</p>
        </div>
        <anime-card
          :shEp="false"
          class="anime"
          na="one piece"
          cl="romance"
          ty="movie"
          st="display now"
        >
          <img src="@/assets/images/AnF_1.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="over lord"
          cl="romance"
          ty="movie"
          st="display now"
        >
          <img src="@/assets/images/AnF_2.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="Shinka no Mi"
          cl="demons"
          ty="movie"
          st="display now"
        >
          <img src="@/assets/images/AnF_3.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="Kage no"
          cl="demons"
          ty="movie"
          st="display now"
        >
          <img src="@/assets/images/AnF_4.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="Classroom Elite"
          ty="ONA"
          se="2022"
        >
          <img src="@/assets/images/AnF_5.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          cl="demons"
          ty="ONA"
          st="display now"
        >
          <img src="@/assets/images/AnF_6.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="How not summom demon lord"
          ty="ONA"
          se="2022"
        >
          <img src="@/assets/images/MoV_1.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="hyouken"
          cl="super power"
          ty="ONA"
          se="2020"
        >
          <img src="@/assets/images/MoV_2.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="i want take you"
          cl="super power"
          ty="ONA"
          se="2021"
        >
          <img src="@/assets/images/MoV_3.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="isekai meikyuu de harem wo"
          cl="magic"
          ty="special"
          se="2022"
        >
          <img src="@/assets/images/MoV_4.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="isekai nobiri nouka"
          cl="historical"
          ty="special"
          st="display now"
        >
          <img src="@/assets/images/MoV_5.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="isekai wa smart phone to tomt no"
          cl="historical"
          ty="special"
          se="2021"
        >
          <img src="@/assets/images/AnF_6.jpg" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="tensi shitra slime"
          cl="magic"
          ty="special"
          se="2020"
        >
          <img src="@/assets/images/LaA_1.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="tate no yuusha"
          cl="romance"
          ty="special"
          se="2022"
        >
          <img src="@/assets/images/LaA_2.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="Tokyo Ghoal"
          cl="romance"
          ty="special"
          st="display now"
        >
          <img src="@/assets/images/LaA_3.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="ore dake haireru"
          st="display now"
        >
          <img src="@/assets/images/LaA_4.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="ningen fushin"
          st="display now"
        >
          <img src="@/assets/images/LaA_5.png" />
        </anime-card>
        <anime-card
          :shEp="false"
          class="anime"
          na="princess connect"
          cl="magic"
          se="2021"
        >
          <img src="@/assets/images/LaA_6.png" />
        </anime-card>
      </div>
    </div>
  </section>
</template>
<script>
import AnimeCard from "@/components/AnimeCrad.vue";
export default {
  name: "AnimeList",
  components: {
    AnimeCard,
  },
  created() {
    this.initialRoute();
  },
  data() {
    return {
      season: "",
      type: "",
      status: "",
      classification: "",
    };
  },
  methods: {
    sendChar(char) {
      this.$store.dispatch("updateChar", char);
    },
    sendClass(classification) {
      this.$store.dispatch("updateClass", classification);
    },
    sendStatus(status) {
      this.$store.dispatch("updateStatus", status);
    },
    sendType(type) {
      this.$store.dispatch("updateType", type);
    },
    sendSeason(season) {
      this.$store.dispatch("updateSeason", season);
    },
    orderByRoute() {
      if (this.getPath === "movie") {
        this.displayAnimes(this.getPath, "type");
      } else if (this.getPath === "season") {
        this.displayAnimes(new Date().getFullYear().toString(), "season");
      } else {
        this.displayAnimes(this.getPath, this.getPath);
      }
    },
    initialRoute() {
      this.orderByRoute();
    },
    displayAnimes(v, order) {
      setTimeout(() => {
        let animes = document.querySelectorAll(".anime");
        let title = document.querySelector(".anime-list .title");
        let notFound = document.querySelector(".anime-list .not-found");
        let check = [];
        animes.forEach((anime) => {
          let addClass = () => anime.classList.add("disappear");
          let removeClass = () => anime.classList.remove("disappear");
          if (order === "char") {
            title.textContent = `search by character => ${v}`;
            if (anime.dataset.name.includes(v)) {
              removeClass();
              check.push(1);
            } else {
              addClass();
            }
          } else if (order === "class") {
            title.textContent = `anime Classification => ${v}`;
            if (anime.dataset.class.toLowerCase().includes(v.toLowerCase())) {
              removeClass();
              check.push(1);
            } else {
              addClass();
            }
          } else if (order === "status") {
            title.textContent = `anime Status => ${v}`;
            if (anime.dataset.status.toLowerCase().includes(v.toLowerCase())) {
              removeClass();
              check.push(1);
            } else {
              addClass();
            }
          } else if (order === "type") {
            title.textContent = `anime Type => ${v}`;
            if (anime.dataset.type.toLowerCase().includes(v.toLowerCase())) {
              removeClass();
              check.push(1);
            } else {
              addClass();
            }
          } else if (order === "season") {
            title.textContent = `anime Season => ${v}`;
            if (anime.dataset.season.toLowerCase().includes(v.toLowerCase())) {
              removeClass();
              check.push(1);
            } else {
              addClass();
            }
          } else if (order === "main") {
            title.textContent = `anime list`;
            removeClass();
            check.push(1);
          }
        });
        if (check.length > 0) {
          notFound.classList.add("disappear");
        } else {
          notFound.classList.remove("disappear");
        }
      }, 0);
    },
  },
  computed: {
    getPath() {
      return this.$route.params.order;
    },
    getChar() {
      return this.$store.state.orderChar;
    },
    getClass() {
      return this.$store.state.orderClass;
    },
    getStatus() {
      return this.$store.state.orderStatus;
    },
    getType() {
      return this.$store.state.orderType;
    },
    getSeason() {
      return this.$store.state.orderSeason;
    },
  },
  watch: {
    getChar(v) {
      this.displayAnimes(v, "char");
    },
    getClass(v) {
      this.displayAnimes(v, "class");
    },
    getStatus(v) {
      this.displayAnimes(v, "status");
    },
    getType(v) {
      this.displayAnimes(v, "type");
    },
    getSeason(v) {
      this.displayAnimes(v, "season");
    },
    getPath() {
      this.orderByRoute();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
.anime-list {
  background-color: var(--d-blue);
  color: var(--white);
  min-height: 70vh;
  position: relative;
  z-index: -1;
  .title {
    padding: 15px;
    text-align: center;
    border-top: 1px solid #eee;
    @include max-mobile {
      font-size: 16px;
    }
  }
  .ordering {
    background-color: var(--vd-blue);
    color: var(--white);
    text-align: center;
    padding: 30px;
    margin-bottom: 30px;
    .selections {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
      select {
        background-color: var(--d-blue);
        color: var(--white);
        padding: 5px;
        border-radius: 4px;
        border: var(--border);
        option:first-of-type {
          color: transparent;
          display: block;
        }
      }
    }
    .characters {
      ul {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        li {
          background-color: var(--d-blue);
          width: 30px;
          padding: 5px 0;
          border-radius: 6px;
          border: var(--border);
          cursor: pointer;
          transition: var(--trans);
          font-weight: bold;
          &:hover {
            color: var(--d-blue);
            background-color: var(--white);
          }
        }
      }
    }
  }
}
</style>
