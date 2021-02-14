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
        ref="newBandRef"
      >
      <button
        class="border rounded bg-gradient-to-r from-blue-400 to-green-500 text-white"
        type="submit"
      >Add Band</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"
export default {
    setup(){
      const newBandRef = ref("")
      const newBand = ref("")
      const bandData = ref([
        { name: "落日飛車" },
        { name: "萬能青年旅店" },
        { name:  "CAS" },
      ])

      onMounted(() => {
        newBandRef.value.focus()
      })

      const countBands = computed({
        get: () => bandData.value.length
      })
      
      function remove(index) {
        bandData.value = bandData.value.filter((band, i) => i != index);
      }

      function addBand() {
        if (newBand.value !== "") {
          bandData.value.unshift({ name: newBand.value });
          newBand.value = "";
        }
      }
      return { bandData, newBand, remove, addBand, newBandRef, countBands }
    }
  };
</script>

<style>
</style>