<template>
<div class="company">

  <div class="services-outer">
    <div class="container">
      <div class="intros">our business areas</div>
      <h2>Excellence in <span class="green">Services</span></h2>
      <div class="services-description">
        <p>
        <!-- eslint-disable-next-line -->
        We are leaders in providing consultancy services with a set of cutting-edge tecnologies and a team of experienced and renowed professionals. These are some options that you can hire.
        </p>
        <button class="btn btn-green">see all</button>
      </div>

      <div class="card-container">
        <ServicesCardPage
        v-for="card in serviceCards"
        :key= "card.title"
        :card-icon= "card.icon"
        :button= "card.button"
        :title= "card.title"
        :text= "card.text"
        />
      </div>
    </div>
    <div class="bullets">
      <img src="@/assets/img/bullets.png" alt="">
    </div>

  </div>
  <div class="about-network">

    <div class="container">
      <div class="left-side">
        <div class="intros">about the network</div>
        <h2><span class="green">The</span> Company</h2>
        <p>
          <!-- eslint-disable-next-line -->
          For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.
        </p>
        <div class="company-cards-container">
          <div class="company-cards">
            <div class="company-card-title">
              <font-awesome-icon icon="fa-medal" />
              <h3>Tradition</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div class="company-cards">
            <div class="company-card-title">
              <font-awesome-icon icon="fa-lock" />
              <h3>Security</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div class="company-cards">
            <div class="company-card-title">
              <font-awesome-icon icon="fa-pen-to-square" />
              <h3>Certificate</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div class="company-cards">
              <div class="company-card-title">
              <font-awesome-icon icon="fa-graduation-cap" />
              <h3>Expertise</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="buttons">
            <button class="btn btn-green">get in touch</button>
            <button class="btn btn-white">read more</button>
        </div>
      </div>
    </div>
    <div class="right-side">
      <img src="@/assets/img/about-4.jpg" alt="">
    </div>

    <div class="bullets">
      <img src="@/assets/img/bullets.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import ServicesCardPage from '@/components/ServicesCardPage.vue';

export default {
  name: 'CompanyName',
  components: {
    ServicesCardPage,
  },
  props: {
    serviceCards: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.services-outer {
  background-color: #eef1ed;
  padding: 6rem 0;
  position: relative;
}
.container{
  flex-direction: column;
}

h2 {
  font-size: $h2-default-font-size;
  margin-bottom: 1.5rem;
}

.services-description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

    p{
      flex: 0 1 75%;
      color: $primary-text-color;
    }
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin-bottom: 3rem;
}

.about-network {
  display: flex;
  position: relative;

  background-color: #111117;

    h2 {
      font-size: $h2-default-font-size;
      color: $secondary-color;

      margin: 2rem 0;
      span {
        color: $secondary-color;
      }
    }

    .right-side {
      position:absolute;
      top: 0;
      right: 0;

      height: 100%;
      width: 50%;

      object-fit: cover;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
}

.bullets {
  width: 100px;
  height: 45px;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -55%);

  z-index: 10;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;

      opacity: 0.5;
    }
}

.left-side {
  width: 50%;

  padding: 8rem 1.5rem 8rem 0;
}

.left-side p {
  color: $primary-text-color;
  font-size: 18px;
}

.company-cards-container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 5rem;
  padding: 5rem 0;

}

.company-cards {
  width: calc((100% - 2rem ) / 2);
}

.company-card-title {
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  color: $primary-color;

  h3 {
    color: $secondary-color;

    margin-left: 1rem;
  }
}

.buttons {
  display: flex;
  gap: 2rem;
}
</style>
