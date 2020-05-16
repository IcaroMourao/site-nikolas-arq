import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import ProjectPicker from '../components/ProjectPicker.vue';
import Project from '../components/Project.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'about',
    component: About,
  },
  {
    path: '/projetos',
    component: Projects,
    children: [
      {
        path: '',
        name: 'projects',
        component: ProjectPicker,
      },
      {
        path: ':id',
        name: 'project',
        component: Project,
        props: true,
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

export default router;
