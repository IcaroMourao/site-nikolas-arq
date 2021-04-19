import Request from '@/api/Request';
import ProjectsItems from '@/items/ProjectsItems';

export default {
  namespaced: true,
  state: {
    projects: undefined,
    isProjectsRequesting: false,
  },
  actions: {
    loadProjects({ commit, state, rootGetters }, payload) {
      if (state.projects && state.projects.lenght > 0) {
        return Promise.resolve(state.projects);
      }
      if (!payload.noLoading) {
        commit('setIsProjectsRequesting', { isProjectsRequesting: true });
      }
      return Request.get('/projects')
        .then((projectsDatails) => {
          const { projectsImages } = ProjectsItems;
          const projects = projectsDatails.map((projectDetails) => ({
            ...projectDetails,
            img: (
              projectsImages.find((projectImg) => projectImg.id === projectDetails.id)
            ).img,
            sliderImgs: (
              projectsImages.find((projectImg) => projectImg.id === projectDetails.id)
            ).sliderImgs,
          }));
          commit('setProjects', { projects, userLikedProjects: rootGetters['user/getUser'].likes });
          commit('setIsProjectsRequesting', { isProjectsRequesting: false });
        });
    },
  },
  mutations: {
    setProjects(state, payload) {
      const projects = [];
      payload.userLikedProjects.forEach((project) => {
        projects.push(project.id);
      });
      state.projects = payload.projects.map((project) => {
        if (projects.includes(project.id)) {
          return {
            ...project,
            liked: true,
          };
        }
        return {
          ...project,
          liked: false,
        };
      });
    },
    setIsProjectsRequesting(state, payload) {
      state.isProjectsRequesting = payload.isProjectsRequesting;
    },
  },
  getters: {
    getProjects: (state) => state.projects,
    getIsProjectsRequesting: (state) => state.isProjectsRequesting,
    getProjectById: (state) => (id) => state.projects.find((project) => project.id === id),
  },
};
