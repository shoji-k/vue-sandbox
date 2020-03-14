const defaultValue = {
  id: null,
  text: "",
  icon: "mdi-check-outline"
};

const state = {
  data: {
    id: null,
    text: "",
    icon: "mdi-check-outline"
  }
};

const getters = {
  data: state => {
    return state.data;
  }
};

const actions = {
  get({ commit, rootGetters }, { id }) {
    const one = rootGetters["announces/one"](id);
    commit("set", one);
  },
  clear({ commit }) {
    commit("clear");
  }
};

const mutations = {
  set(state, data) {
    state.data = data
  },
  clear(state) {
    state.data = { ...defaultValue };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
