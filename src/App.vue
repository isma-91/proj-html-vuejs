<template>
  <div>
    <HeaderPage />
    <MainPage />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Alexandria', sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  display: flex;

  max-width: 1200px;
  margin: 0 auto;
}

.btn {
  text-transform: uppercase;
  border: 0;
  padding: .6rem 1.2rem;
  border-radius: 5px;
  border: 1px solid $primary-color;
}

.btn:hover{
  background-color: $primary-hover-color;
  color: $secondary-color;
}

.btn-green {
  background-color: $primary-color;
  color: $secondary-color;
}

.btn-white {
  background-color: transparent;
  color: $primary-color;
}

button:hover {
cursor: pointer;
}
</style>
