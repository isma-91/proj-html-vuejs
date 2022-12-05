<template>
<main>
<CompanyPage />
<ProjectResultsPage />
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
};
</script>

<style lang="scss" scoped>

</style>
