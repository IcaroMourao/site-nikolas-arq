import Vue from 'vue';

const getUserToken = () => localStorage.getItem('access_token');

module.exports = {
  getDefaultHeaders() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${getUserToken()}`,
      },
    };
  },

  get(endpoint) {
    return Vue.axios.get(endpoint, this.getDefaultHeaders())
      .then((res) => res);
  },

  post(endpoint, body) {
    return Vue.axios.post(endpoint, body, this.getDefaultHeaders())
      .then((res) => res);
  },

  delete(endpoint) {
    return Vue.axios.delete(endpoint, this.getDefaultHeaders())
      .then((res) => res);
  },

  patch(endpoint, body) {
    return Vue.axios.patch(endpoint, body, this.getDefaultHeaders())
      .then((res) => res);
  },
};
