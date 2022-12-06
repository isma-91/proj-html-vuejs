<template>
<main>
<CompanyPage :serviceCards="arrCards"/>
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
  data() {
    return {
      arrCards: [
        {
          icon: 'fa-diagram-project',
          button: 'fa-arrow-right',
          title: 'Audit & Assurance',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          icon: 'fa-briefcase',
          button: 'fa-arrow-right',
          title: 'Financial advisory',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          icon: 'fa-chart-simple',
          button: 'fa-arrow-right',
          title: 'Analytics and M&A',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          icon: 'fa-plane',
          button: 'fa-arrow-right',
          title: 'Middle Marketing',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          icon: 'fa-earth-europe',
          button: 'fa-arrow-right',
          title: 'Legal Consulting',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          icon: 'fa-inbox',
          button: 'fa-arrow-right',
          title: 'Regulatory Risk',
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
