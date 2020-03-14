const state = {
  list: [
    { id: 1, text: "Just do it", icon: "mdi-check-outline" },
    { id: 2, text: "You Just do it", icon: "mdi-check-outline" }
  ]
};

const getters = {
  list: state => {
    return state.list;
  },
  one: state => id => {
    return state.list.find(one => one.id === id);
  }
};

const actions = {
  create({ commit }, { text }) {
    commit("create", text);
  },
  update({ commit }, { id, text }) {
    commit("update", { id, text });
  }
};

const mutations = {
  create(state, text) {
    const maxId = state.list.reduce((a, b) => {
      return Math.max(a.id, b.id);
    });
    state.list.push({ id: maxId + 1, text: text, icon: "mdi-check-outline" });
  },
  update(state, { id, text }) {
    state.list = state.list.map(one => {
      if (one.id === id) {
        return { ...one, text: text };
      }
      return one;
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
