import Vue from 'vue';

const getUserToken = () => localStorage.getItem('access_token');

export default {
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
      .then((res) => res.data);
  },

  post(endpoint, body) {
    return Vue.axios.post(endpoint, body, this.getDefaultHeaders())
      .then((res) => res.data);
  },

  delete(endpoint) {
    return Vue.axios.delete(endpoint, this.getDefaultHeaders())
      .then((res) => res.data);
  },

  patch(endpoint, body) {
    return Vue.axios.patch(endpoint, body, this.getDefaultHeaders())
      .then((res) => res.data);
  },
};
