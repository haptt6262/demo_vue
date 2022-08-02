<template>
    <div id="app">
        <ul>
            <li v-for="item in itemReducer.$state.listItem" :key="item">
                {{ item.nameTeacher }}
            </li>
        </ul>
        <button @click="test">bam vao {{ counter }}</button>
    </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { ref, defineComponent, computed, onMounted } from "vue";

import { useStore } from "../reducers/itemReducer";
import { getData } from "../sagas/itemSaga"
import { useCounterStore } from '../stores/counter'

export default defineComponent({
    name: "App",
    setup() {
        const itemReducer = useStore();
        const CounterStore = useCounterStore();

        const { counter } = storeToRefs(CounterStore)
        const test = () => {
            CounterStore.doubleCount()
            console.log(counter);
        }
        onMounted(() => getData())

        return {
            itemReducer, test, counter
        };
    },
    // methods: {
    //     test() {
    //         this.CounterStore.doubleCount
    //     }
    // }
});

</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 1rem 2rem;
}

footer {
    font-size: 0.75rem;
    text-align: right;
    color: darkgray;
}
</style>