import Request from '@/api/Request';

export default {
  namespaced: true,
  state: {
    user: {},
    isUserLoaded: false,
  },
  actions: {
    loadUser({ commit, dispatch, state }, payload) {
      const userId = (payload && payload.id) || state.user.id;
      if (!userId) {
        return Promise.reject();
      }
      return Request.get(`/users/${userId}`)
        .then((user) => {
          commit('setUser', { user });
          commit('setIsUserLoaded', { isUserLoaded: true });
          return dispatch('project/loadProjects', { noLoading: payload.noLoading }, { root: true });
        });
    },
    storeUser({ commit, state }, payload) {
      if (state.user && state.user.id) {
        return Promise.resolve(state.user);
      }
      return Request.post(`/users/${payload.id}`)
        .then((response) => {
          commit('setUserId', { userId: response.data.id });
        });
    },
    storeLike({ dispatch, state }, payload) {
      return Request.post(`/users/${state.user.id}/likes`, payload)
        .then(() => dispatch('loadUser', { noLoading: true }));
    },
  },
  mutations: {
    setUserId(state, payload) {
      state.user.id = payload.userId;
    },
    setUser(state, payload) {
      state.user.id = payload.user.id;
      state.user.likes = payload.user.projects;
    },
    setIsUserLoaded(state, payload) {
      state.isUserLoaded = payload.isUserLoaded;
    },
  },
  getters: {
    getUser: (state) => state.user,
    getIsUserLoaded: (state) => state.isUserLoaded,
  },
};
