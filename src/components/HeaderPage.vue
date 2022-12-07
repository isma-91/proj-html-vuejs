<template>
<header>
<div id="start" class="top-bar">
  <div class="container">
    <div class="top-bar-left-side">
      <font-awesome-icon icon="fa-solid fa-clock" />
      <div class="timetables">Open Hours: Mon-Sat - 9:00-18:00</div>
    </div>
    <div class="top-bar-right-side">
      <div class="telephone">
        <font-awesome-icon icon="fa-solid fa-phone" />
        +1(305) 1234 5678
      </div>
      <div class="mail">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        hello@example.com
      </div>
      <div class="socials">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </div>
    </div>
  </div>
</div>
<div class="bottom-bar">
  <NavPage :top-nav="arrMenuHeader"/>
</div>
</header>
</template>

<script>
import NavPage from '@/components/NavPage.vue';

export default {
  name: 'HeaderPage',
  components: {
    NavPage,
  },
  data() {
    return {

    };
  },
  props: {
    arrMenuHeader: Array,
  },
  // created() {
  //   console.log(this.arrMenuHeader);
  // },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.top-bar {
  background-color: #21333E;
  height: 45px;
}

.container {
  height: 100%;

  justify-content: space-between;
  align-items: center;

  color: #C0C3D0;

}

.top-bar-left-side {
  display: flex;
}

.timetables {
  margin-left: 10px;
}

.top-bar-right-side,
.socials {
  display: flex;
  column-gap: 1.5rem;
}

</style>
