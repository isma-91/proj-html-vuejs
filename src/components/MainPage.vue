<template>
<main>
  <CompanyPage
  :serviceCards="arrCards"
  />
  <ProjectResultsPage
  :arrCardSelectors="arrCardSelectors"
  :arrProjectCards="arrProjectCards"
  :arrResults="arrResults"
  :arrSponsors="arrSponsors"
  />
  <FormPage />
</main>
</template>

<script>
import CompanyPage from '@/components/CompanyPage.vue';
import FormPage from '@/components/FormPage.vue';
import ProjectResultsPage from '@/components/ProjectResulsPage.vue';

export default {
  name: 'MainPage',
  components: {
    CompanyPage,
    ProjectResultsPage,
    FormPage,
  },
  props: {
    arrCards: Array,
    arrCardSelectors: Array,
    arrProjectCards: Array,
    arrResults: Array,
    arrSponsors: Array,
  },
};
</script>

<style lang="scss" scoped>

</style>
