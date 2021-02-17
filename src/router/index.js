import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';

import About from '@/views/about/About.vue';
import Professionals from '@/views/about/Professionals.vue';
import ProfessionalDescription from '@/views/about/ProfessionalDescription.vue';

import Projects from '@/views/projects/Projects.vue';
import ProjectPicker from '@/views/projects/ProjectPicker.vue';
import Project from '@/views/projects/Project.vue';

import AnotherServices from '@/views/another-services/AnotherServices.vue';
import Services from '@/views/another-services/Services.vue';
import Contact from '@/views/another-services/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      scrollToTop: true,
    },
  },
  {
    path: '/sobre',
    component: About,
    children: [
      {
        path: '',
        name: 'about',
        component: Professionals,
        meta: {
          scrollToTop: true,
        },
      },
      {
        path: ':professional',
        name: 'professional-description',
        component: ProfessionalDescription,
        props: true,
        meta: {
          scrollToTop: true,
        },
      },
    ],
  },
  {
    path: '/projetos',
    component: Projects,
    children: [
      {
        path: '',
        name: 'projects',
        component: ProjectPicker,
        meta: {
          scrollToTop: true,
        },
      },
      {
        path: ':id',
        name: 'project',
        component: Project,
        props: true,
        meta: {
          scrollToTop: true,
        },
      },
    ],
  },
  {
    path: '/outros-servicos',
    component: AnotherServices,
    children: [
      {
        path: '',
        name: 'services',
        component: Services,
        meta: {
          scrollToTop: true,
        },
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        props: true,
        meta: {
          scrollToTop: true,
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  if (to.meta.scrollToTop) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
});

export default router;
