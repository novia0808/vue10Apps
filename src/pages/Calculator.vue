<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class='text-2xl text-center'>calculator</h1>
      <p class="no-scrollbar text-3xl text-right mt-10 ml-2 w-40 h-10 overflow-x-scroll" style="direction:rtl">{{currentNum}}</p>
      <div class="h-10">
        <small v-if="selectedOperation">{{prevNum}} {{selectedOperation}} {{currentNum}}</small>
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded shadow">1</button>
        <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded shadow">2</button>
        <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded shadow">3</button>
        <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
        <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded shadow">4</button>
        <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded shadow">5</button>
        <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded shadow">6</button>
        <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
        <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded shadow">7</button>
        <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded shadow">8</button>
        <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded shadow">9</button>
        <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
        <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded shadow">0</button>
        <button @click="pressed('C')" class="p-2 w-10 h-10 border rounded shadow">C</button>
        <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
        <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue'
import useWindowEvent from '../utilities/composition/useWindowEvent'

export default {
  setup(){
    const operations = ['+', '-', '*', '/']
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    const currentNum = ref('')
    const prevNum = ref('')
    const selectedOperation = ref('')

    function pressed(value){
      if(value === '=' || value === 'Enter') calculate()
      else if(value === 'C') clear()
      else if(operations.includes(value)) applyOperation(value)
      else if(numbers.includes(value)) appendNumber(value)
    } 

    function appendNumber(value){
      currentNum.value = currentNum.value + value
    }

    function applyOperation(value){
      calculate()
      prevNum.value = currentNum.value
      currentNum.value = ''
      selectedOperation.value = value
    }

    function calculate(){
      if(selectedOperation.value === '*') multiply()
      else if(selectedOperation.value === '+') sum()
      else if(selectedOperation.value === '-') subtract()
      else if(selectedOperation.value === '/') divide()

      prevNum.value = ''
      selectedOperation.value = ''
    }

    function multiply(){
      currentNum.value = prevNum.value * currentNum.value
    }
    function sum(){
      currentNum.value = +prevNum.value + +currentNum.value
    }
    function subtract(){
      currentNum.value = prevNum.value - currentNum.value
    }
    function divide(){
      currentNum.value = prevNum.value / currentNum.value
    }

    const clear = () => currentNum.value = ''

    const handleKeydown = (e) => pressed(e.key)

    useWindowEvent('keydown', handleKeydown)

    return { currentNum, pressed, prevNum, selectedOperation }
  }
}
</script>

<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>