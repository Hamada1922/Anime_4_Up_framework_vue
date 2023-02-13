<template>
  <section class="user-view">
    <img src="@/assets/images/logo.png" class="logo" />
    <p class="note">register for this site {{ getUserAction }}</p>
    <form class="user-form" @submit="submit">
      <div class="group">
        <label for="username"> username </label>
        <span class="username-erorr"></span>
        <span class="username-rules"></span>
        <input
          @input="usernameCheckRules()"
          id="username"
          type="text"
          v-model="username"
        />
      </div>
      <div class="group">
        <label class="mix-label" for="mix"> username or email </label>
        <span class="mix-erorr"></span>
        <span class="mix-rules"></span>
        <input
          @input="mixCkeckRules(this.getUserAction)"
          id="mix"
          type="text"
          v-model="mix"
        />
      </div>
      <div class="group">
        <label for="email"> email </label>
        <span class="email-erorr"></span>
        <span class="email-rules"></span>
        <input
          @input="emailCkeckRules()"
          id="email"
          type="email"
          v-model="email"
        />
      </div>
      <div class="group">
        <label class="password-label" for="password"> passeord </label>
        <span class="password-erorr"></span>
        <span class="password-rules"></span>
        <input
          @input="passwordCkeckRules(this.getUserAction)"
          id="password"
          type="password"
          v-model="password"
        />
      </div>
      <input
        @click="sendUserInfo()"
        @mouseenter="globalRules()"
        class="btn"
        id="act"
        type="submit"
        value="register"
      />
      <button class="fake disappear" @click="checkForResetPssword()">
        check
      </button>
    </form>
    <div class="links">
      <router-link class="link" to="/user/login">login</router-link>
      <router-link class="link" to="/user/register">register</router-link>
      <router-link class="link" to="/user/password reset">
        forget password
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  created() {
    this.manageUserView(this.getUserAction);
  },
  data() {
    return {
      username: "",
      email: "",
      mix: "",
      password: "",
    };
  },
  computed: {
    getUserAction() {
      return this.$route.params.action;
    },
    getUsers() {
      return this.$store.state.users;
    },
  },
  watch: {
    getUserAction(v) {
      this.manageUserView(v);
    },
  },
  methods: {
    declear() {
      let actBtn = document.getElementById("act");
      let fakeBtn = document.querySelector(".fake");
      //
      let usernameRules = document.querySelector(".username-rules");
      let mixRules = document.querySelector(".mix-rules");
      let emailRules = document.querySelector(".email-rules");
      let passwordRules = document.querySelector(".password-rules");
      return {
        actBtn,
        fakeBtn,
        usernameRules,
        mixRules,
        emailRules,
        passwordRules,
      };
    },
    usernameCheckRules() {
      let count = [];
      if (this.username.length < 5) {
        // console.log("uername less than 5 chr");
        this.declear().usernameRules.textContent =
          "uername less than 5 letters";
        count.push(1);
      } else {
        this.declear().usernameRules.textContent = "";
      }
      if (count.length > 0) {
        this.declear().actBtn.classList.add("disabled");
      } else {
        this.declear().actBtn.classList.remove("disabled");
      }
      // console.log(count);
      // if (this.mix.length < 5) {
      //   this.declear().mixRules.textContent = "full name less than 5 letters";
      //   count.push(1);
      // }
      // if (!this.email.includes("@")) {
      //   this.declear().emailRules.textContent = "email must icludes @ mark";
      //   count.push(1);
      // }
      // if (this.password.length < 8) {
      //   this.declear().passwordRules.textContent = "password is too weak";
      //   count.push(1);
      // }
    },
    mixCkeckRules(action) {
      let count = [];
      if (action == "register") {
        if (this.mix.length < 5) {
          this.declear().mixRules.textContent = "it`s less than 5 letters";
          count.push(1);
        } else {
          this.declear().mixRules.textContent = "";
        }
      }
      if (count.length > 0) {
        this.declear().actBtn.classList.add("disabled");
      } else {
        this.declear().actBtn.classList.remove("disabled");
      }
    },
    emailCkeckRules() {
      let count = [];
      if (!this.email.includes("@")) {
        this.declear().emailRules.textContent = "email must include @ mark";
        count.push(1);
      } else {
        this.declear().emailRules.textContent = "";
      }
      if (count.length > 0) {
        this.declear().actBtn.classList.add("disabled");
      } else {
        this.declear().actBtn.classList.remove("disabled");
      }
    },
    passwordCkeckRules(action) {
      let count = [];
      if (action == "register") {
        if (this.password.length < 8) {
          this.declear().passwordRules.textContent = "it`s less than 8 letters";
          count.push(1);
        } else {
          this.declear().passwordRules.textContent = "";
        }
      }
      if (count.length > 0) {
        this.declear().actBtn.classList.add("disabled");
      } else {
        this.declear().actBtn.classList.remove("disabled");
      }
    },
    globalRules() {
      // console.log("run");
      this.usernameCheckRules();
      this.mixCkeckRules(this.getUserAction);
      this.emailCkeckRules();
      this.passwordCkeckRules(this.getUserAction);
    },
    manageFields() {
      let formGroups = document.querySelectorAll(".user-form .group");
      formGroups.forEach((group) => group.classList.remove("disappear"));
      for (let i = 0; i < arguments.length; i++) {
        formGroups[arguments[i]].classList.add("disappear");
      }
    },
    manageUserView(action) {
      setTimeout(() => {
        let formLinks = document.querySelectorAll(".links .link");
        let note = document.querySelector(".note");
        let passwordLabel = document.querySelector(".password-label");
        let mixLabel = document.querySelector(".mix-label");
        // let actBtn = document.getElementById("act");
        // let fakeBtn = document.querySelector(".fake");
        //
        note.textContent = action;
        passwordLabel.textContent = "password";
        mixLabel.textContent = "username or email";
        this.declear().actBtn.value = action;
        this.declear().actBtn.classList.remove("disappear");
        this.declear().fakeBtn.classList.add("disappear");
        this.declear().actBtn.classList.add("disabled");
        //
        function managelinks(i) {
          formLinks.forEach((link) => link.classList.remove("disappear"));
          formLinks[i].classList.add("disappear");
        }
        if (action === "register") {
          this.manageFields();
          managelinks(1);
          this.declear().actBtn.classList.add("disabled");
          mixLabel.textContent = "full Name";
        } else if (action === "login") {
          this.manageFields(0, 2);
          managelinks(0);
        } else if (action === "password reset") {
          this.manageFields(0, 2, 3);
          managelinks(2);
          passwordLabel.textContent = "new password";
          this.declear().actBtn.classList.add("disappear");
          this.declear().fakeBtn.classList.remove("disappear");
        }
      }, 0);
    },
    submit($e) {
      $e.preventDefault();
    },
    detectRepeating(action) {
      let detect = [];
      let inUsername = this.mix;
      let inEmail = this.mix;
      let inpassword = null;
      let inUser = {};
      let inIndex = 0;
      if (action == "register") {
        inUsername = this.username;
        inEmail = this.email;
      }
      // console.log(inUsername);
      // console.log(inEmail);
      this.getUsers.forEach((user, index) => {
        if (user.username === inUsername) {
          detect.push(1);
          inUser = user;
          inIndex = index;
          if (user.password === this.password) {
            inpassword = user.password;
          }
        } else if (user.email === inEmail) {
          detect.push(0);
          inUser = user;
          inIndex = index;
          if (user.password === this.password) {
            inpassword = user.password;
          }
        }
      });
      // console.log(inUser, inIndex);
      return {
        detect,
        inpassword,
        inUser,
        inIndex,
      };
    },
    checkForResetPssword() {
      console.log("ckeck");
      this.declear();
      let mixInput = document.getElementById("mix");
      let mixErorr = document.querySelector(".mix-erorr");
      if (this.detectRepeating(this.getUserAction).detect.length === 0) {
        console.log("not found");
        mixInput.style.backgroundColor = "#ff000033";
        mixErorr.textContent = " user name or email not found";
      } else {
        console.log("found");
        mixInput.style.backgroundColor = "inherit";
        mixErorr.textContent = "";
        this.manageFields(0, 1, 2);
        // console.log(this.mix);
        this.declear().fakeBtn.classList.add("disappear");
        this.declear().actBtn.classList.remove("disappear");
      }
    },
    sendUserInfo() {
      // #ff000033
      let usernameInput = document.getElementById("username");
      let usernameErorr = document.querySelector(".username-erorr");
      let emailInput = document.getElementById("email");
      let emailErorr = document.querySelector(".email-erorr");
      let mixInput = document.getElementById("mix");
      let mixErorr = document.querySelector(".mix-erorr");
      let passwordInput = document.getElementById("password");
      let passwordErorr = document.querySelector(".password-erorr");

      if (this.getUserAction == "register") {
        if (this.detectRepeating(this.getUserAction).detect.length === 0) {
          usernameInput.style.backgroundColor = "inherit";
          usernameErorr.textContent = "";
          emailInput.style.backgroundColor = "inherit";
          emailErorr.textContent = "";
          //
          let user = {
            id: this.getUsers.length,
            username: this.username,
            fullname: this.mix,
            email: this.email,
            password: this.password,
          };
          this.$store.dispatch("addUser", user);
        } else {
          console.log("old");
          if (this.detectRepeating(this.getUserAction).detect.includes(1)) {
            console.log("user repeat");
            usernameInput.style.backgroundColor = "#ff000033";
            usernameErorr.textContent = "this user name alerady used";
          } else {
            usernameInput.style.backgroundColor = "inherit";
            usernameErorr.textContent = "";
          }
          if (this.detectRepeating(this.getUserAction).detect.includes(0)) {
            console.log("email repeat");
            emailInput.style.backgroundColor = "#ff000033";
            emailErorr.textContent = "this email alerady used";
          } else {
            emailInput.style.backgroundColor = "inherit";
            emailErorr.textContent = "";
          }
        }
      } else if (this.getUserAction == "login") {
        if (this.detectRepeating(this.getUserAction).detect.length === 0) {
          console.log("not found");
          mixInput.style.backgroundColor = "#ff000033";
          mixErorr.textContent = " user name or email not found";
        } else {
          mixInput.style.backgroundColor = "inherit";
          mixErorr.textContent = "";
          if (
            this.detectRepeating(this.getUserAction).inpassword ===
            this.password
          ) {
            console.log("correct password");
            passwordInput.style.backgroundColor = "inherit";
            passwordErorr.textContent = "";
            this.$store.dispatch(
              "setCurrentUser",
              this.detectRepeating().inUser
            );
            this.$store.dispatch("setUserMessages");
          } else {
            passwordInput.style.backgroundColor = "#ff000033";
            passwordErorr.textContent = "wrong password";
            console.log("hagskahks");
          }
        }
      } else if (this.getUserAction == "password reset") {
        this.getUsers[
          this.detectRepeating(this.getUserAction).inIndex
        ].password = this.password;
        this.$store.commit("addToStorage");
      }
      usernameInput.value = "";
      emailInput.value = "";
      mixInput.value = "";
      passwordInput.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/css/scss/_mixins.scss";

.user-view {
  position: relative;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0;
  background-color: var(--d-blue);
  color: var(--white);
  min-height: 70vh;
  .logo {
    @include max-mobile {
      max-width: 60%;
    }
  }
  .note {
    padding: 15px 20px;
    background-color: var(--vd-blue);
    width: 30%;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      background-color: var(--l-blue);
      top: 0;
      left: 0;
      height: 100%;
      width: 4px;
    }
  }
  .user-form {
    width: 30%;
    padding: 20px;
    background-color: var(--vd-blue);
    .group {
      label {
        @include max-mobile {
          font-size: 13px;
        }
      }
      span {
        margin: 0 30px;
        color: #f00;
        font-size: 12px;
        display: block;
        margin: 10px 0;
      }
      span:last-of-type {
        text-align: end;
        color: var(--l-blue);
      }
      input {
        display: block;
        margin: 5px 0 10px;
        width: 100%;
        padding: 7px;
        border-radius: 6px;
        background-color: inherit;
        border: var(--border);
      }
    }
    .btn,
    .fake {
      background-color: var(--white);
      color: var(--vd-blue);
      padding: 7px 15px;
      display: block;
      margin: 20px 0 0 auto;
      border-radius: 6px;
      border: var(--border);
      &:hover {
        background-color: var(--vd-blue);
        color: var(--white);
      }
    }
  }
  @include max-mobile {
    .note,
    .user-form {
      width: 90%;
    }
  }
  .links {
    display: flex;
    gap: 10px;
    .link {
      transition: var(--trans);
      @include max-mobile {
        font-size: 12px;
      }
      &:hover {
        color: var(--l-blue);
      }
    }
  }
}
</style>
