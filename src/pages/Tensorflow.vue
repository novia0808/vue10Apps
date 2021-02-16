<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <h1>Tensorflow Object Detection</h1>
      </div>
    </div>

  </section>
</template>

<script>
import { onMounted, ref } from "vue"
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default {
  setup(){
    const imgRef = ref("")
    onMounted(async ()=>{
      const img = imgRef.value
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      console.log('Predictions: ');
      console.log(predictions);
    })
  }
 
}
</script>

<style>

</style>