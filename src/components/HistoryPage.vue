<template>
  <div class="container">
    <h5>History Page</h5>

    <div class="history">
      <p
        v-for="(number, index) in history"
        :key="index"
        :class="activeCounter(parseInt(value)).includes(index) && 'bold'"
      >
        {{ number }}
      </p>
    </div>
    <input placeholder="Search" type="number" v-model="value" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeCounter"]),
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 4rem;
}
.history {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.history p {
  margin: 1rem;
}
input {
  padding: 0.3rem;
  text-align: center;
}
.bold {
  font-weight: 600;
  color: blueviolet;
}
</style>