import Vue from "vue";
import Vuex from "vuex";
import announces from "./modules/announces";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    announces: announces
  },
  strict: debug
});

export default store;
