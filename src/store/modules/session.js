const state = {
  logined: false,
  name: ""
};

const getters = {
  name: state => {
    return state.name;
  }
};

const actions = {
  login({ commit }, { name }) {
    commit("login", name);
  },
  logout({ commit }) {
    commit("logout");
  }
};

const mutations = {
  login(state, name) {
    state.name = name;
    state.logined = true;
  },
  logout(state) {
    state.name = "";
    state.logined = false;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
