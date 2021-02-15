import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import ProjectPicker from '@/components/ProjectPicker.vue';
import Project from '@/components/Project.vue';
import Professionals from '@/components/Professionals.vue';
import ProfessionalDescription from '@/components/ProfessionalDescription.vue';

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
