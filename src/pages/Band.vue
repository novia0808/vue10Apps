<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">小眾樂團 {{countBands}}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(band,index) in bandData"
        :key="band.name"
      >
        <div>{{ band.name }}</div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form
      class="mt-10"
      @submit.prevent="addBand"
    >
      <input
        class="border rounded"
        v-model="newBand"
        placeholder="Type Band Name Here"
      >
      <button
        class="border rounded bg-gradient-to-r from-blue-400 to-green-500 text-white"
        type="submit"
      >Add Band</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newBand: "",
        bandData: [
          { name: "落日飛車" },
          { name: "萬能青年旅店" },
          { name: "CAS" },
        ],
      };
    },
    computed: {
      countBands() {
        return this.bandData.length;
      },
    },
    methods: {
      addBand() {
        console.log("123");
        if (this.newBand !== "") {
          this.bandData.unshift({ name: this.newBand });
          this.newBand = "";
        }
      },
      remove(index) {
        this.bandData = this.bandData.filter((band, i) => i != index);
      },
    },
  };
</script>

<style>
</style>