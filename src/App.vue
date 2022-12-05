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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  background-color: $secondary-color;
  color: $primary-color;
}

button:hover {
cursor: pointer;
}
</style>
