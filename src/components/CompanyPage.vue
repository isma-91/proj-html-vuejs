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
    </div>

  </div>
  <div class="about-network">

  </div>
</div>
</template>

<script>
export default {
  name: 'CompanyName',
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.services-outer {
  background-color: #eef1ed;
  padding: 4rem 0;
}
.container{
  flex-direction: column;
}
.intros{
  color: $third-color;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;

  margin-bottom: 1.5rem;
}

h2 {
  font-size: 35px;
  margin-bottom: 1.5rem;
}
.green {
  background-color: rgba($color: $primary-color, $alpha: .3);
  color: $primary-color;

  padding: .1rem .8rem;
  border-radius: 5px;
}

.services-description {
  display: flex;
  justify-content: space-between;

    p{
      flex: 0 1 75%;
      color: $primary-text-color;
    }
}
</style>
