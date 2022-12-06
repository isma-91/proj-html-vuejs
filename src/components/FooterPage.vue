<template>
<footer>
<div class="top-footer">
  <div class="container">
    <div class="left-side">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="">
      </div>
    </div>
    <div class="right-side">
      <FooterCard />
    </div>
  </div>
</div>
<div class="bottom-footer">
  <div class="container">

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
}

.left-side {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  width: 30%;

    img {
      max-width: 50%;
    }
}

.right-side{
  display: flex;
  flex: 1 1 auto;

  width: 70%;

}

</style>
