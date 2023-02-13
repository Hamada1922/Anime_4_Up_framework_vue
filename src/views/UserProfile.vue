<template>
  <section class="dashboard">
    <h2 class="page-title">profile</h2>
    <div class="container">
      <div class="info">
        <i class="fas fa-user fa-fw"></i>
        <div class="text">
          <div class="group">
            <p class="username">user name : <span></span></p>
            <p class="id">user id : <span>1</span></p>
          </div>
          <p class="full-name">full name : <span></span></p>
          <div class="group">
            <p class="email">email : <span></span></p>
            <p class="password">password : <span></span></p>
          </div>
        </div>
      </div>
      <div class="messages">
        <span class="messages-title">
          <i class="fa-solid fa-envelope"></i>
          messages
        </span>
        <div
          class="message"
          v-for="(message, index) in getUserMessages"
          :key="message"
        >
          <div class="head">
            <span class="message-id">{{ index + 1 }}</span>
            <p class="message-name">
              name: <span>{{ message.name }}</span>
            </p>
            <p class="message-email">
              email : <span>{{ message.email }}</span>
            </p>
          </div>
          <p class="content">{{ message.content }}</p>
          <button @click="deleteMessage(index)" class="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserDashboard",
  created() {
    this.displayUserInfo();
    this.check();
  },
  computed: {
    getCurrenUser() {
      return this.$store.state.currentUser;
    },
    getMessages() {
      return this.$store.state.messages;
    },
    getUserMessages() {
      return this.$store.state.userMessages;
    },
  },
  methods: {
    check() {
      this.$store.dispatch("checkStorage");
    },
    declear() {
      let username = document.querySelector(".username span");
      let id = document.querySelector(".id span");
      let fullname = document.querySelector(".full-name span");
      let email = document.querySelector(".email span");
      let password = document.querySelector(".password span");
      return {
        username,
        id,
        fullname,
        email,
        password,
      };
    },
    displayUserInfo() {
      setTimeout(() => {
        this.declear().username.textContent = this.getCurrenUser.username;
        this.declear().id.textContent = this.getCurrenUser.id;
        this.declear().fullname.textContent = this.getCurrenUser.fullname;
        this.declear().email.textContent = this.getCurrenUser.email;
        this.declear().password.textContent = this.getCurrenUser.password;
        this.$store.dispatch("setUserMessages");
      }, 0);
    },
    deleteMessage(index) {
      this.getMessages.forEach((message, i) => {
        if (message.content == this.getUserMessages[index].content) {
          this.getMessages.splice(i, 1);
          this.$store.commit("addMessagesToStorage");
          this.$store.dispatch("setUserMessages");
        }
      });
    },
  },
};
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((num, index) => {
//   // console.log(`index ${index} ${num}`);
// });
</script>

<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
.dashboard {
  position: relative;
  z-index: -1;
  background-color: var(--d-blue);
  color: var(--white);
  min-height: 70vh;
  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--vd-blue);
    padding: 20px;
    i {
      font-size: 60px;
    }
    @include max-mobile {
      flex-direction: column;
    }
    .text {
      .group {
        display: flex;
        align-items: center;
        gap: 60px;
        margin: 10px 0;
        @include max-mobile {
          flex-direction: column;
          gap: 10px;
        }
      }
      p {
        font-size: 17px;
        font-weight: bold;
        span {
          color: var(--l-blue);
          font-size: 1rem;
        }
      }
    }
  }
  .messages {
    background-color: var(--vd-blue);
    padding: 30px 30px;
    margin-top: 30px;
    position: relative;
    .messages-title {
      position: absolute;
      top: -13px;
      font-weight: bold;
      font-size: 22px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .message {
      background-color: var(--d-blue);
      padding: 20px 25px 10px;
      margin-top: 20px;
      position: relative;
      @include max-mobile {
        padding: 20px 10px 10px;
        font-size: 12px;
      }

      .head {
        display: flex;
        gap: 100px;
        padding: 10px;
        background-color: var(--vd-blue);
        margin-bottom: 10px;
        @include max-mobile {
          flex-direction: column;
          gap: 10px;
        }
        .message-id {
          position: absolute;
          background-color: var(--white);
          color: var(--vd-blue);
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5%;
          top: 0;
          left: 0;
          font-weight: bold;
          @include max-mobile {
            left: 50%;
            @include prefix(transform, translateX(-50%), webkit moz);
          }
        }
        p {
          font-weight: bold;
          span {
            color: var(--l-blue);
          }
        }
      }
      .content {
        line-height: 1.6;
        font-size: 14px;
        padding: 10px;
      }
      .delete-btn {
        padding: 5px 10px;
        border-radius: 4px;
        display: block;
        margin-left: auto;
        background-color: var(--white);
        color: var(--vd-blue);
        border: var(--border);
        &:hover {
          background-color: var(--vd-blue);
          color: var(--white);
        }
      }
    }
  }
}
</style>
