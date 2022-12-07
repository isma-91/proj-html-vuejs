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
          @click="((activeIndex = index), filterCards(string))"
          @keydown="(activeIndex = index)"
          >
          {{ string }}
        </li>
      </ul>

      <ul class="project-cards-container">
        <ProjectCardPage
        v-for="objCard in arrProjectCards"
        :key="objCard.title"
        :card="objCard"
        :class="{hidden: objCard.visible === false}"
      />
      </ul>
  </div>
  <!-- Può una section stare dentro un altra section? -->
  <section class="results">
    <div class="container">
      <div class="intros">we do more for everyone</div>
      <h2><span class="green">Results</span> in Numbers</h2>
      <div class="results-outer">
        <ul
        v-for="result in arrResults"
        :key="result.total">
          <li class="total-number">
            {{ result.total }}
          </li>
          <li class="category">
            {{ result.title }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="sponsor">
    <ul class="container">
      <li
      v-for="sponsor in arrSponsors"
      :key="sponsor.id">
    <img :src="require(`@/assets/img/${sponsor.url}`)" alt="">
    </li>
    </ul>
  </section>
</section>
</template>

// TODO: Cercare di fare il "Filtro" per le cards
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
    arrResults: Array,
    arrSponsors: Array,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    filterCards(string) {
      this.arrProjectCards.forEach((e) => {
        // console.log(e.type + string);
        if (e.type === string || string === 'all') {
          e.visible = true;
        } else {
          e.visible = false;
        }
      });
    },

  },
  // created() {
  //   console.log(this.arrProjectCards[1].type);
  // },
  // computed: {
  //   filteredCards() {
  //     return this.arrProjectCards.filter((objCard));
  //   },
  // },
  // created() {
  //   console.log(this.arrProjectCards);
  // },
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
  text-align: center;
  margin-top: 1rem;
}

.intros{
  text-align: center;
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
  justify-content: center;

  width: 100%;
  gap: 2rem;
}

.results {
  background-image: url('@/assets/img/bg-7.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  margin-top: 10rem;
  padding: 10rem;
}

.results h2 {
  color: $secondary-color;
  span{
    color: $secondary-color;
  }
}

.results-outer {
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 6rem;
}

.results-outer ul {
  text-align: center;
}

.total-number {
  font-size: 40px;
  font-weight: 600;
  color: $third-color;

  margin-bottom: 1rem;
}

.category {
  color: $secondary-color;
  font-weight: 600;
  font-size: 22px;
}

.sponsor {
  background-color: #111117;
  padding: 10rem 0;

  display: flex;
}

.sponsor .container {
  width: 100%;
  justify-content: space-between;

    img {
      filter: brightness(3);
    }
}

</style>
