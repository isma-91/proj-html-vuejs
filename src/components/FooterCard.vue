<template>
<li>
  <a href="#"><font-awesome-icon :icon= icon /> <span>{{ text }}</span></a>
</li>
</template>

<script>
export default {
  name: 'FooterCard',
  props: {
    icon: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

li {
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: .7rem;
}

span {
  margin-left: .6rem;
}

a {
  color: $primary-text-color;
}

</style>
