import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(1)

  const doubleCount = () => {
    counter.value * 2
    console.log(counter.value);
  }

  const increment = () => counter.value++

  return {
    counter: computed(() => counter.value),
    doubleCount,
    increment
  }
})
