<template>
  <div class="counter">
    <h2 class="counterall">Vuex</h2>
    <h2 class="counterall">{{ counter }}</h2>
    <button @click="nullCounter(parseInt(value))">-</button>
    <input type="number" v-model="value" />
    <button @click="addCounter(parseInt(value))">+</button>
    <div>
        <button class="btn" @click="randomNumber">Random Number</button>
    </div>
  </div>
</template>
      
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      value: 2,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addCounter", "nullCounter"]),
    ...mapActions(["randomNumber"])
  },
};
</script>
      
<style scoped>
.counterall {
  font-size: 3rem;
  text-align: center;
}

.counter {
  text-align: center;
}

button {
  border: none;
  background-color: yellow;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}

input {
  padding: 0.3rem;
  text-align: center;
}
.btn {
    border-radius: 0.3rem;
    width: auto;
    background-color:aqua;
    margin-top: 1rem;
    color: black;
    cursor: pointer;
}
</style>