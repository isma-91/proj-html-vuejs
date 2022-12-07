<template>
<footer>
<div class="top-footer">
  <div class="container">
    <div class="left-side">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo">
      </div>
      <p>A Functional HTML Template for Corporate & Business</p>

      <ul>
        <li><a href="!">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-phone" /></div>
          +1 (305) 1234-5678
        </a></li>
        <li><a href="!">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-envelope" /></div>
          hello@example.com
        </a></li>
        <li><a href="!">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
          Main Avenue, 987
        </a></li>
      </ul>

      <button class="btn btn-white">get in touch</button>

    </div>
    <div class="right-side">
      <div class="list">
        <h3>About</h3>
        <ul>
          <FooterCard
          class="footer-card"
          v-for="about in arrFooterAbout"
          :key="about.text"
          :icon="about.icon"
          :text="about.text"
          />
        </ul>
      </div>

      <div class="list">
        <h3>Services</h3>
        <ul>
          <FooterCard
          class="footer-card"
          v-for="service in arrFooterServices"
          :key="service.text"
          :icon="service.icon"
          :text="service.text"
          />
        </ul>
      </div>

      <div class="list">
        <h3>Support</h3>
        <ul>
          <FooterCard
          class="footer-card"
          v-for="sup in arrFooterSupport"
          :key="sup.text"
          :icon="sup.icon"
          :text="sup.text"
          />
        </ul>
      </div>

    </div>
  </div>
</div>
<div class="bottom-footer">
  <div class="container">
    <div class="thanks">
      Enjoy the low price.We are tracking any intention of piracy.
    </div>
    <div class="copyright">
      © 2020 NEXGEN is Proudly Powered by <a href="#">Codings</a>
    </div>
  </div>
  <div class="top">
    <!-- eslint-disable-next-line -->
    <a href="#start"><font-awesome-icon icon="fa-solid fa-arrow-up" /></a>
  </div>
</div>
</footer>
</template>

<script>
import FooterCard from '@/components/FooterCard.vue';

export default {
  name: 'FooterPage',
  components: {
    FooterCard,
  },
  props: {
    arrFooterAbout: Array,
    arrFooterServices: Array,
    arrFooterSupport: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.top-footer {
    background-color: #111117;
    padding-top: 6rem;
    height: 500px;

    font-size: $p-default-font-size;
    color: $primary-text-color;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;

  width: 25%;
  margin-right: 2rem;

  a {
    display: flex;
    align-items: center;
    color: $primary-text-color;
  }

    p {
      margin: 2rem 0;
      color: $primary-text-color;
    }

    li {
      margin-bottom: 1.5rem;
    }

    img {
      max-width: 50%;
    }

    button {
      color: $secondary-color;
    }
}

.right-side{
  display: flex;
  flex: 1 1 auto;

  width: 75%;
  gap: 1.5rem;
}

  .icon{
    margin-right: 1rem;

    font-size: 20px;
  }

  .list {
    height: 100%;
    background-color: #19191F;
    padding-top: 3rem;
    padding-left: 3rem;
    width: calc((100% - 1.5rem * 2) / 3);
    border-radius: 10px;

      h3{
        margin-bottom: 1.5rem;
        font-size: 25px;
        color: $secondary-color;
      }
  }

  .bottom-footer {
    background-color: #0D0D11;
    padding: 2.5rem 0;

    position: relative;
  }
  .bottom-footer .container {
    justify-content: space-between;
    color: $primary-text-color;

    a{
      color: $third-color;
    }
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);

    height: 40px;
    width: 40px;

    background-color: #1A1A1D;
    border-radius: 50%;

      a{
        color: #0D1317;
        font-size: 25px;
        padding: 1rem;
      }
  }

</style>
