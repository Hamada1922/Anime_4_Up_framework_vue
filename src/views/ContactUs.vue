<template>
  <section class="contact">
    <h2 class="page-title">
      <i class="fa-solid fa-envelope"></i>
      Contact US
    </h2>
    <div class="container">
      <form class="form" @submit="prevent">
        <div class="form-group">
          <label for="name">Name *</label>
          <span class="name-rules"></span>
          <input
            @input="nameCheckRules()"
            v-model="name"
            id="name"
            type="text"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">email *</label>
          <span class="email-rules"></span>
          <input
            @input="emailCheckRules()"
            v-model="email"
            id="email"
            type="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="content">message *</label>
          <span class="content-rules"></span>
          <textarea
            @input="messageCheckRules()"
            v-model="content"
            id="content"
            required
          />
        </div>
        <input
          @mouseenter="globalCheckRules()"
          @click="sendMessage()"
          class="btn"
          id="submit"
          type="submit"
        />
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactUS",
  created() {
    this.checkCurrentUser();
  },
  data() {
    return {
      name: "",
      email: "",
      content: "",
    };
  },
  methods: {
    declear() {
      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let content = document.getElementById("content");
      let nameRules = document.querySelector(".name-rules");
      let emailRules = document.querySelector(".email-rules");
      let messageRules = document.querySelector(".content-rules");
      let submitBtn = document.getElementById("submit");
      return {
        name,
        email,
        content,
        nameRules,
        emailRules,
        messageRules,
        submitBtn,
      };
    },
    checkCurrentUser() {
      setTimeout(() => {
        if (this.getCurrentUser == null) {
          this.declear().submitBtn.classList.add("disabled");
        } else {
          this.declear().submitBtn.classList.remove("disabled");
        }
      }, 0);
    },
    btnControl(count) {
      if (count.length > 0) {
        this.declear().submitBtn.classList.add("disabled");
      } else {
        this.declear().submitBtn.classList.remove("disabled");
      }
    },
    nameCheckRules() {
      let count = [];
      if (this.name.length < 5) {
        this.declear().nameRules.textContent = "name less 5 letters";
        count.push(1);
      } else {
        this.declear().nameRules.textContent = "";
      }
      this.btnControl(count);
    },
    emailCheckRules() {
      let count = [];
      if (!this.email.includes("@")) {
        this.declear().emailRules.textContent = "email must includes @ mark";
        count.push(1);
      } else {
        this.declear().emailRules.textContent = "";
      }
      this.btnControl(count);
    },
    messageCheckRules() {
      let count = [];

      if (this.content.length < 30) {
        this.declear().messageRules.textContent = "message less 30 letters";
        count.push(1);
      } else {
        this.declear().messageRules.textContent = "";
      }
      this.btnControl(count);
    },
    globalCheckRules() {
      this.nameCheckRules();
      this.emailCheckRules();
      this.messageCheckRules();
    },
    prevent($e) {
      $e.preventDefault();
    },
    sendMessage() {
      let message = {
        name: this.name,
        email: this.email,
        content: this.content,
        userId: this.getCurrentUser.id,
      };
      this.$store.dispatch("addNewMessage", message);
      this.declear().name.value = "";
      this.declear().email.value = "";
      this.declear().content.value = "";
    },
  },
  computed: {
    getCurrentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
.contact {
  position: relative;
  z-index: -1;
  background-color: var(--d-blue);
  min-height: 70vh;
  .title {
    background-color: var(--vd-blue);
    color: var(--white);
    padding: 15px 0;
    text-align: center;
  }
  .form {
    margin-top: 20px;
    padding: 50px 20px;
    background-color: var(--vd-blue);
    color: var(--white);
    .form-group {
      margin-bottom: 10px;
      span {
        color: #ff0033;
        display: block;
        font-size: 12px;
        text-align: end;
      }
      input,
      textarea {
        padding: 5px;
        width: 100%;
        color: var(--s-d-blue);
        display: block;
      }
      textarea {
        min-height: 130px;
      }
      @include min-small {
        input#name {
          width: 25%;
        }
        input[type="email"] {
          width: 50%;
        }
      }
    }
    input[type="submit"] {
      padding: 10px 15px;
      color: var(--vd-blue);
      background-color: var(--white);
    }
  }
}
</style>
