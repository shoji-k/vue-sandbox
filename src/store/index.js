import Vue from "vue";
import Vuex from "vuex";
// TODO: load automatically
import announce from "./modules/announce";
import announces from "./modules/announces";
import session from "./modules/session";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    announce: announce,
    announces: announces,
    session: session
  },
  strict: debug
});

export default store;
