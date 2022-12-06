<template>
<div class="card">

  <div class="card-icon">
    <font-awesome-icon :icon= cardIcon />
  </div>

  <div class="card-button">
    <button><font-awesome-icon :icon= button /></button>
  </div>

  <h3 class="card-title">{{ title }}</h3>
  <p class="card-text">{{ text }}</p>
</div>
</template>

<script>

export default {
  name: 'ServicesCardPage',
  props: {
    // Perchè con oggetto non funziona??
    cardIcon: String,
    button: String,
    title: String,
    text: String,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.card {
  background-color: $secondary-color;
  position: relative;

  width: calc((100% - 2rem * 2) / 3);
  padding: 3rem;

  border-radius: 10px;
}
.card-icon {
  font-size: 40px;
  color: $primary-color;
}

.card-button{
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 40px;
  right: 40px;

  height: 40px;
  aspect-ratio: 1/1;

  padding: .5rem;
  border-radius: 100%;
}

.card-button:hover {
  background-color: rgba($color: $primary-color, $alpha: .3);
}

button {
  border: 0;
  background-color: transparent;

  font-size: 25px;
  color: $third-color;
}

.card-title {
  font-size: 25px;

  margin: 2rem 0;
}

.card-text {
  color: $primary-text-color;
}

</style>
