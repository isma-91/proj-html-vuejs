<template>
<section class="projects">
  <div class="container">
    <div class="intros">we do more for everyone</div>
    <h2>Actions & <span class="green">Projects</span></h2>
      <ul class="card-selectors">
        <li
          v-for="string, index in arrCardSelectors"
          :key="index"
          :class="{ 'selected': index === activeIndex }"
          @click="(activeIndex = index)"
          @keydown="(activeIndex = index)"
          >
          {{ string }}
        </li>
      </ul>

      <ul class="project-cards-container">
        <ProjectCardPage
        v-for="objCard in arrProjectCards"
        :key="objCard.titolo"
        :card="objCard"
      />
      </ul>
  </div>
</section>
</template>

<script>
import ProjectCardPage from '@/components/ProjectCardPage.vue';

export default {
  name: 'ProjectResultsPage',
  components: {
    ProjectCardPage,
  },
  props: {
    arrCardSelectors: Array,
    arrProjectCards: Array,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
  },
  // computed: {
  //   filteredCards() {
  //     return this.arrProjectCards.filter((objCard));
  //   },
  // },
  created() {
    console.log(this.arrProjectCards);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.projects {
  margin: 7rem 0;
}
.container {
  flex-wrap: wrap;
}

h2 {
  width: 100%;
  font-size: $h2-default-font-size;
  text-align: center;
}

.intros{
  width: 100%;

  color: $third-color;

  text-align: center;
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

.card-selectors{
  width: 100%;

  display: flex;
  justify-content: space-around;

  text-transform: uppercase;

  margin: 3rem 0;
}

.card-selectors li {
  padding: .7rem .5rem;
  border-radius: 4px;

  cursor: pointer;
}

.selected {
  background-color: rgba($color: $primary-color, $alpha: .2);
}

.project-cards-container {
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
}

</style>
