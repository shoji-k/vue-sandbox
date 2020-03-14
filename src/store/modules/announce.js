const defaultValue = {
  id: null,
  text: "",
  icon: "mdi-check-outline"
};

const state = {
  data: { ...defaultValue }
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
  },
  create({ dispatch, commit }, { text }) {
    dispatch("announces/create", { text }, { root: true });
    commit("clear");
  },
  update({ dispatch, commit }, { id, text }) {
    dispatch("announces/update", { id, text }, { root: true });
    commit("clear");
  }
};

const mutations = {
  set(state, data) {
    state.data = data;
  },
  inputText(state, value) {
    state.data.text = value;
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
