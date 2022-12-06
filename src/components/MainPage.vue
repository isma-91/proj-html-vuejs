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
      arrCardSelectors: ['all', 'institutional', 'social', 'events', 'innovation', 'environment', 'technology'],
      arrProjectCards: [
        {
          url: 'project-1.jpg',
          type: 'innovation',
          title: 'Academic professional program in social media',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
        },
        {
          url: 'project-2.jpg',
          type: 'events',
          title: 'President\'s speech at the annual meeting',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
        },
        {
          url: 'project-3.jpg',
          type: 'environment',
          title: 'International business trip in Shangai',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
        },
        {
          url: 'project-4.jpg',
          type: 'technology',
          title: 'Technology workshop with education theme',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
        },
        {
          url: 'project-5.jpg',
          type: 'institutional',
          title: 'Donation of clothes and food to the partner NGO',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
        },
        {
          url: 'project-6.jpg',
          type: 'social',
          title: 'Confraternization of the procurement team',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
        },
      ],
      arrResults: [
        {
          title: 'Certifications',
          total: 128,
        },
        {
          title: 'Employees',
          total: 230,
        },
        {
          title: 'Customers',
          total: 517,
        },
        {
          title: 'Countries Served',
          total: 94,
        },
      ],
      arrSponsors: [
        {
          id: 1,
          url: 'logo-4.png',
        },
        {
          id: 2,
          url: 'logo-5.png',
        },
        {
          id: 3,
          url: 'logo-1.png',
        },
        {
          id: 4,
          url: 'logo-2.png',
        },
        {
          id: 5,
          url: 'logo-3.png',
        },
        {
          id: 6,
          url: 'logo-4.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
