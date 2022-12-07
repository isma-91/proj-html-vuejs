<template>
  <div>
  <section class="projects">
    <div class="container">
      <div class="intros">we do more for everyone</div>
      <h2>Actions & <span class="green">Projects</span></h2>
        <ul class="card-selectors">
          <li
            v-for="string, index in arrCardSelectors"
            :key="index"
            :class="{ 'selected': index === activeIndex }"
            @click="(activeIndex = index), selectType(string)"
            @keydown="(activeIndex = index)"
            >
            {{ string }}
          </li>
        </ul>

        <ul class="project-cards-container">
          <ProjectCardPage
          v-for="objCard in arrCardsFiltered"
          :key="objCard.title"
          :card="objCard"
        />
        </ul>
    </div>
    <!-- Può una section stare dentro un altra section? -->
  </section>

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
</div>
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
    arrResults: Array,
    arrSponsors: Array,
  },
  data() {
    return {
      activeIndex: 0,
      string: 'all',
    };
  },
  methods: {
    selectType(string) {
      this.string = string;
    },
    // filterCards(string) {
    //   this.arrProjectCards.forEach((e) => {
    //     // console.log(e.type + string);
    //     if (e.type === string || string === 'all') {
    //       e.visible = true;
    //     } else {
    //       e.visible = false;
    //     }
    //   });
    // },
  },
  computed: {
    // eslint-disable-next-line
    // Ricordarsi che le computed properties sono simili alle funzioni, DEVONO ritornare un valore e si possono usare come variabili. Quindi in questo caso abbiamo preso l'aray delle nostre cards, se il valore base di "string" (variabile che abbiamo creato noi per dargli una base, ma che poi andremo a modificare noi in base a cosa selezioniamo sulla pagina tramite un altra funzione) è "all" allora ritorna l'array originale e verranno visualizzate, in questo caso, tutte le cards. Altrimenti se il valore di "string" è diverso da "all" l'array originale verrà "filtrato" e, in questo caso, verranno visualizzate solo le cards il cui attributo .type è uguale alla "string". L'array filtrato viene salvato automaticamente nella funzione che essendo computed e quindi potendola usare come variabile la useremo per fare il nostro ciclo v-for nell'HTML al posto dell'array originale, dato che può restituirci entrambi.
    arrCardsFiltered() {
      if (this.string === 'all') {
        return this.arrProjectCards;
      }
      return this.arrProjectCards.filter((objCard) => objCard.type === this.string);
    },
  },
  // created() {
  //   console.log(this.arrProjectCards.filter((objCard) => objCard.type === 'string'));
  // },
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
