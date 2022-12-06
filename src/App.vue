<template>
  <div>
    <HeaderPage />
    <MainPage />
    <FooterPage
      :arrFooterAbout="arrFooterAbout"
      :arrFooterServices="arrFooterServices"
      :arrFooterSupport="arrFooterSupport"
    />
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
      arrFooterAbout: [
        {
          icon: 'fa-angle-right',
          text: 'The Company',
        },
        {
          icon: 'fa-angle-right',
          text: 'Institutuinal',
        },
        {
          icon: 'fa-angle-right',
          text: 'Social & Events',
        },
        {
          icon: 'fa-angle-right',
          text: 'Innovation',
        },
        {
          icon: 'fa-angle-right',
          text: 'Environment',
        },
        {
          icon: 'fa-angle-right',
          text: 'Technology',
        },
      ],
      arrFooterServices: [
        {
          icon: 'fa-angle-right',
          text: 'Audit & Assurance',
        },
        {
          icon: 'fa-angle-right',
          text: 'Financial Advisory',
        },
        {
          icon: 'fa-angle-right',
          text: 'Analytics M&A',
        },
        {
          icon: 'fa-angle-right',
          text: 'Middle Marketing',
        },
        {
          icon: 'fa-angle-right',
          text: 'Legal Consulting',
        },
        {
          icon: 'fa-angle-right',
          text: 'Regulatory Risk',
        },
      ],
      arrFooterSupport: [
        {
          icon: 'fa-angle-right',
          text: 'Responsibility',
        },
        {
          icon: 'fa-angle-right',
          text: 'Terms of Use',
        },
        {
          icon: 'fa-angle-right',
          text: 'About Cookies',
        },
        {
          icon: 'fa-angle-right',
          text: 'Privacy Policy',
        },
        {
          icon: 'fa-angle-right',
          text: 'Accessibility',
        },
        {
          icon: 'fa-angle-right',
          text: 'Information',
        },
      ],
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

.intros{
  width: 100%;

  color: $third-color;

  text-transform: uppercase;
  font-weight: bold;
  font-size: $intros-font-size;

  margin-bottom: 1.5rem;
}

.green {
  background-color: rgba($color: $primary-color, $alpha: .3);
  color: $primary-color;

  padding: .1rem .8rem;
  border-radius: 5px;
}

h2 {
    width: 100%;
    font-size: $h2-default-font-size;
}
</style>
