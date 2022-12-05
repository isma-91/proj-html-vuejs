<template>
  <div class="header-bottom">
    <nav class="container">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo">
      </div>
      <div class="nav-menu">
        <ul>
          <li  v-for="menu in topNav"
          :key="menu"
          >
            <a href="!">{{ menu }}</a>
          </li>
          <!-- Lultima voce "Get in touch" è un bottone? come la si fa? -->
        </ul>
      </div>
    </nav>
    <div class="introduction">
      <div class="page-details">
        <h1>Ready <span class="green">Team</span> </h1>
        <p>
        No matter what your company needs, we will be ready to assist you in the best possible way.
        </p>
        <div class="buttons">
          <button class="btn btn-green">get in touch</button>
          <button class="btn btn-white">read more</button>
        </div>
        <div class="selectors">
          <div class="circle"></div>
          <div class="circle full"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPage',
  props: {
    topNav: Array,
  },
  // created() {
  //   console.log(this.topNav.length);
  // },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
/* -------------------
GENERALI
---------------------*/
.container {
  width: 1200px;
  height: 55px;
  padding: .5rem;

  justify-content: space-between;
  align-items: center;
    .logo {
      height: 100%;
    }
    img {
      height: 100%;
    }
}

// Nav bar styles
.nav-menu ul {
  display: flex;
}

.nav-menu li {
  margin: 0 .5rem;
  text-transform: uppercase;
}

a {
  padding: .5rem;
}

// Ultimo figlio diverso con padding e colore... ma è un bottone??
li:last-child a {
  color: $secondary-color;
  background-color: $primary-color;
  border-radius: 5px;
}

// Mettiamo la background image
.header-bottom {
  background-image: url('@/assets/img/bg-parallax.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150%; // TODO: Vedere come sistemare il background-size

  height: 830px;

  display: flex;
  flex-direction: column;

  position: relative;
}
.selectors{
  position:absolute;
  right: 30px;
  top: 50%;
}
.circle {
  height: 20px;
  width: 10px;
  border: 1px solid $primary-color;
  border-radius: 40px;

  cursor: pointer;
}

.circle.full {
  background-color: $primary-color;
}

// Stili per il div centrale
.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  height: 100%;
}

.page-details {
  max-width: 350px;

    h1 {
      font-size: 60px;
      .green {
        background-color: rgba($color: $primary-color, $alpha: .3);
        color: $primary-color;

        padding: .1rem .8rem;
        border-radius: 5px;
      }
    }
    p {
      margin: 1.5rem 0;
      color: $primary-text-color;
    }
    .buttons{
      display: flex;
      justify-content: center;

      gap: 1rem;
    }
}

</style>
