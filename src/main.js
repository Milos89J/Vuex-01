import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

const store = createStore({
  state() {
    return {
      counter: 0,
      history: [0],
    };
  },
  mutations: {
    addCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },
    nullCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter);
    },
  },
  actions: {
    async randomNumber(context) {
      let data = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      context.commit("addCounter", data.data);
    },
  },
  getters: {
    activeCounter: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
});

const app = createApp(App);

app
  .use(store)

  .mount("#app");
