<template>
  <header>
    <div class="container">
      <router-link to="/">
        <img
          src="@/assets/images/logo.png"
          alt="anime 4 up logo"
          class="logo"
        />
      </router-link>
      <nav>
        <div class="menu">
          <router-link class="router-link" to="/">Home</router-link>
          <router-link class="router-link" to="/list/main"
            >Anime List</router-link
          >
          <router-link class="router-link" to="/list/movie"
            >Anime Movies</router-link
          >
          <router-link class="router-link" to="/list/season"
            >Seasonal Animes</router-link
          >
          <router-link class="router-link" to="/dates"
            >Episodes Dates</router-link
          >
          <router-link class="router-link" to="/contact">Contact</router-link>
        </div>
        <button @click="menuToggle()" class="toggler">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <span class="toggler-name">Menu</span>
      </nav>
      <div class="control">
        <button @click="userToggle()" class="user-icon">
          <i class="fas fa-user fa-fw"></i>
        </button>
        <button
          @click="searchToggle(), checkSearchInput(), inputFocus()"
          class="search-icon"
        >
          <i class="fas fa-search fa-fw"></i>
        </button>
        <button @click="themeToggle()" class="theme-icon">
          <i class="fa-solid fa-sun fa-fw"></i>
        </button>
        <div class="profile-btn">
          <button class="special-btn disappear" @click="profileToggle()">
            <router-link class="profile-icon" to="/profile">
              <i class="fa-solid fa-user-gear fa-fw"></i>
            </router-link>
          </button>
          <button class="special-btn disappear" @click="profileToggle()">
            <router-link class="home-icon" to="/">
              <i class="fa-solid fa-home fa-fw"></i>
            </router-link>
          </button>
        </div>
        <div class="user-window hidden">
          <router-link @click="userToggle()" class="user-link" to="/user/login"
            >Login</router-link
          >
          <router-link
            @click="userToggle()"
            class="user-link"
            to="/user/register"
          >
            register
          </router-link>
          <router-link
            @click="userToggle()"
            class="user-link"
            to="/user/password reset"
          >
            Forget Password
          </router-link>
        </div>
      </div>
      <div class="search-div hidden">
        <button @click="searchToggle()" class="close btn">
          <i class="fa-solid fa-xmark fa-fw"></i>
        </button>
        <input
          class="search-input"
          type="text"
          placeholder="search in website"
          v-model="searchText"
          @keydown="checkSearchInput()"
        />
        <button
          class="search-btn btn"
          @click="sendSearchText(), clearSearchInput(), searchToggle()"
        >
          <router-link class="search-route" to="/search">
            <i class="fas fa-search fa-fw"></i>
          </router-link>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  created() {
    this.showProfile();
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    declear() {
      let specialBtns = document.querySelectorAll(".special-btn");
      return {
        specialBtns,
      };
    },
    sendSearchText() {
      this.$store.dispatch("update", this.searchText);
    },
    clearSearchInput() {
      document.querySelector(".search-input").value = "";
    },
    inputFocus() {
      document.querySelector(".search-input").focus();
    },
    checkSearchInput() {
      setTimeout(() => {
        let input = document.querySelector(".search-input");
        let btn = document.querySelector(".search-btn");
        if (input.value === "") {
          btn.classList.add("disabled");
        } else {
          btn.classList.remove("disabled");
        }
      }, 0);
    },
    menuToggle: () => {
      document.querySelector(".toggler").classList.toggle("active");
      document.querySelector(".control").classList.toggle("move");
      document.querySelector("header").classList.toggle("stretch");
      document.querySelector(".menu").classList.toggle("active");
    },
    searchToggle: () => {
      document.querySelector(".search-icon").classList.toggle("active");
      document.querySelector(".search-div").classList.toggle("hidden");
    },
    userToggle: () => {
      document.querySelector(".user-icon").classList.toggle("active");
      document.querySelector(".user-window").classList.toggle("hidden");
    },
    themeToggle: () => {
      document.querySelector(".theme-icon").classList.toggle("active");
      document.querySelector(".theme-icon i").classList.toggle("fa-sun");
      document.querySelector(".theme-icon i").classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
    },
    profileToggle() {
      this.declear().specialBtns.forEach((btn) =>
        btn.classList.toggle("disappear")
      );
    },
    showProfile() {
      setTimeout(() => {
        if (this.getCurrentUser != null) {
          this.declear().specialBtns[0].classList.remove("disappear");
        } else {
          this.declear().specialBtns[0].classList.add("disappear");
        }
      }, 0);
    },
  },
  computed: {
    getCurrentUser() {
      return this.$store.state.currentUser;
    },
  },
  watch: {
    getCurrentUser() {
      this.declear().specialBtns[0].classList.remove("disappear");
      this.declear().specialBtns[1].classList.add("disappear");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";

header {
  position: relative;
  background-color: var(--s-white);
  color: var(--s-vd-blue);
  z-index: 0;
  &.stretch {
    margin-bottom: 210px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    @include max-medium {
      flex-direction: column;
      gap: 20px;
    }
    @include max-mobile {
      gap: 10px;
    }
    .logo {
      height: 50px;
      padding: 5px 0;
    }
    nav {
      position: relative;
      @include max-mobile {
        width: 100%;
        padding: 10px;
        background-color: var(--s-vd-blue);
        color: var(--s-white);
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .menu {
        display: flex;
        align-items: center;
        gap: 20px;
        .router-link {
          transition: var(--trans);
          &:hover {
            color: var(--l-blue);
          }
        }
        @include max-mobile {
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          align-items: flex-start;
          gap: 0;
          opacity: 0;
          z-index: -1;
          transition: 0.5s;
          pointer-events: none;
          background-color: var(--d-blue);
          .router-link {
            position: relative;
            display: block;
            padding: 7px;
            border: 1px solid #ddd;
            width: 100%;
            color: var(--white);
            &::before {
              position: absolute;
              content: "";
              left: 0;
              top: 0;
              height: 100%;
              width: 0;
              background-color: var(--l-blue);
              z-index: -1;
              transition: var(--trans);
            }
            &:hover {
              color: var(--v-blue);
            }
            &:hover::before {
              width: 100%;
            }
          }
          &.active {
            opacity: 1;
            z-index: 1;
            pointer-events: all;
          }
        }
      }
      .toggler {
        @include min-small {
          display: none;
        }
        display: flex;
        flex-direction: column;
        width: 25px;
        gap: 3px;
        background: none;
        position: relative;
        span {
          width: 100%;
          height: 3px;
          background-color: var(--s-white);
          transition: var(--trans);
        }
        &.active {
          span {
            position: absolute;
            background-color: var(--l-blue);
          }
          span:first-of-type {
            @include prefix(transform, rotate(45deg), webkit moz);
          }
          span:nth-of-type(2) {
            display: none;
          }
          span:last-of-type {
            @include prefix(transform, rotate(-45deg), webkit moz);
          }
        }
      }
      .toggler-name {
        // color: var(--white);
        font-weight: bold;
        @include min-small {
          display: none;
        }
      }
    }
    .control {
      transition: var(--trans);
      position: relative;
      display: flex;
      gap: 5px;
      &.move {
        @include prefix(transform, translateY(210px), webkit moz);
      }
      .profile-btn {
        display: flex;
        gap: 5px;
        .special-btn {
          background-color: var(--l-blue);
          color: var(--white);
        }
      }
      button {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        @include prefix(
          box-shadow,
          -2px 2px 1px 0px rgb(0 0 0 / 50%),
          webkit moz
        );
        transition: var(--trans);
        i {
          transition: var(--trans);
        }
        @include max-mobile {
          width: 30px;
          height: 30px;
          i {
            font-size: 14px;
          }
        }
        &.active {
          @include prefix(transform, translate(-2px, 2px), webkit moz);
          @include prefix(
            box-shadow,
            0px 0px 0px 0px rgb(0 0 0 / 50%),
            webkit moz
          );
          i {
            color: var(--l-blue);
          }
        }
      }
      .profile-icon,
      .home-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .user-window {
        position: absolute;
        background-color: var(--d-blue);
        color: var(--white);
        border: var(--border);
        padding: 10px;
        border-radius: 6px;
        top: 130%;
        min-width: 140px;
        .user-link {
          display: block;
          padding: 5px;
          cursor: pointer;
          &:hover {
            background-color: var(--vd-blue);
          }
        }
        &::before {
          position: absolute;
          content: "";
          top: -15%;
          left: 8%;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent var(--d-blue) transparent;
        }
      }
    }
    .search-div {
      position: absolute;
      top: 101%;
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      gap: 10px;
      background-color: var(--vd-blue);
      border: var(--border);
      padding: 10px;
      border-radius: 5px;
      z-index: 1;
      .close {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f00;
        border: 1px solid transparent;
        &:hover {
          background-color: transparent;
          color: #f00;
          border-color: #f00;
        }
      }
      .search-input {
        flex: 1;
        background: transparent;
        border: none;
        border: var(--border);
        background-color: var(--d-blue);
        padding: 5px 10px;
        border-radius: 6px;
      }
      .search-btn {
        width: 10%;
        background-color: transparent;
        .search-route {
          background-color: var(--l-blue);
          color: var(--white);
          padding: 5px;
          display: block;
          width: 100%;
          height: 100%;
          border: 1px solid transparent;
          &:hover {
            background-color: transparent;
            color: var(--l-blue);
            border-color: var(--l-blue);
          }
        }
      }
      @include max-mobile {
        flex-direction: column;
        align-items: center;
        .close {
          border-radius: 4px;
          width: 20%;
        }
        .search-input {
          width: 90%;
        }
        .search-btn {
          width: 30%;
        }
      }
    }
  }
}
</style>
