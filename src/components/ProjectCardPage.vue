<template>
  <li class="card">
    <button class="hidden"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
    <img
    :src="require(`@/assets/img/${card.url}`)"
    :alt="card.title">
      <ul class="positioned">
        <li class="main-text">
          {{ card.title }}
        </li>
        <li class="text hidden">
          {{ card.text }}
        </li>
      </ul>
  </li>
</template>

<script>
export default {
  name: 'ProjectCardPage',
  props: {
    card: Object,
  },
  data() {
    return {
    };
  },
  // methods: {
  //   getImage(url) {
  //     console.log(this.imgUrlPrefix + url);
  //     return this.imgUrlPrefix + url;
  //   },
  // },

};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.card{
  position:relative;
  width: calc((100% - 2rem * 2) / 3);
  min-width: 370px;
  flex: 0 1 auto;

  overflow: hidden;
    img {
      max-width: 100%;
      border-radius: 20px;
      filter: brightness(0.6);
    }

    cursor: pointer;
}

.positioned {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 80%;
  transform: translateX(-50%);

  color: $secondary-color;
  text-align: center;
}

button {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: $secondary-color;
  z-index: 20;

  border: 0;
  background-color: transparent;
}

.hidden {
  display: none;
}

.card:hover * {
  cursor: pointer;
  display: block;
}

.main-text {
  font-weight: 600;
  font-size: 20px;
}

.text {
  margin-top: 1rem;
  font-weight: 300;
}

</style>
