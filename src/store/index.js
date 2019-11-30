import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { USER_URLS } from "../_Helpers/ApiUrl";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {}
    //accessToken: localStorage.getItem("access_token") || "",
  },
  mutations: {
    setCurrentUser(state, loginResponse) {
      state.currentUser = loginResponse;
    },
    getCurrentUserToken(state) {
      return state.currentUser.token;
    }
  },
  actions: {
    async login({ commit }) {
      await axios
        .post(USER_URLS.login, {
          username: "admin",
          password: "admin"
        })
        .then(response => {
          console.log(response.data);
          commit("setCurrentUser", response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  modules: {}
});
