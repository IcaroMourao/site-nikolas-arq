import Request from '@/api/Request';

export default {
  namespaced: true,
  state: {},
  actions: {
    sendEmail(_context, payload) {
      return Request.post('/contacts', payload);
    },
  },
  mutations: {},
  getters: {},
};
