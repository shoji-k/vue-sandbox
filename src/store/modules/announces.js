const state = {
  data: [
    { id: 1, text: "Just do it", icon: "mdi-check-outline" },
    { id: 2, text: "You Just do it", icon: "mdi-check-outline" }
  ]
};

const getters = {
  list: state => {
    return state.data;
  }
};

const actions = {
  async create({ commit }, text) {
    commit("create", text);
  }
};

const mutations = {
  create(state, text) {
    const maxId = state.data.reduce((a, b) => {
      return Math.max(a.id, b.id);
    });
    state.data.push({ id: maxId + 1, text: text, icon: "mdi-check-outline" });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
