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
  async login({ commit }, { name }) {
    commit("login", name);
  }
};

const mutations = {
  login(state, name) {
    state.name = name;
    state.logined = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
