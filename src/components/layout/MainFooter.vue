<template>
  <footer>
    <div class="spam"></div>
    <div class="container">
      <p class="copyright">re designed by <span>Shinigami</span></p>
      <div class="social">
        <i class="telegram fa-brands fa-telegram fa-fw"></i>
        <i class="instagram fa-brands fa-instagram fa-fw"></i>
        <i class="youtube fa-brands fa-youtube fa-fw"></i>
        <i class="twitter fa-brands fa-twitter fa-fw"></i>
        <i class="facebook fa-brands fa-facebook-f fa-fw"></i>
      </div>
      <p class="privacy">privacy policy | DMCA</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
@import "@/css/scss/_mixins.scss";
footer {
  background-color: var(--vd-blue);
  color: var(--white);
  .spam {
    background-color: var(--m-blue);
    height: 60px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 30px;
    @include max-mobile {
      flex-direction: column;
      gap: 20px;
    }
  }
  .copyright {
    span {
      color: var(--l-blue);
      font-weight: bold;
    }
  }
  .social {
    display: flex;
    align-items: center;
    gap: 10px;
    .telegram {
      color: #0088cc;
    }
    .instagram {
      color: #833ab4;
    }
    .youtube {
      color: #ff0000;
    }
    .twitter {
      color: #1da1f2;
    }
    .facebook {
      color: #1877f2;
    }
    i {
      transition: var(--trans);
      cursor: pointer;
      &:hover {
        @include prefix(transform, scale(1.3), webkit moz);
        color: var(--white);
      }
    }
  }
  .privacy {
    color: var(--l-blue);
    transition: var(--trans);
    &:hover {
      color: var(--white);
    }
  }
}
</style>
