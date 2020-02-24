const state = {
  data: [
    { id: 1, text: "Just do it", icon: "mdi-check-outline" },
    { id: 2, text: "You Just do it", icon: "mdi-check-outline" }
  ]
};
const getters = {
  getList: state => {
    return state.data;
  }
};
const actions = {};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
