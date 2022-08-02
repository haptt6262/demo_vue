import { defineStore } from 'pinia'
import { itemTypes } from '../constants/actionsType/index'
const DEFAULT_STATE = {
    listItem: [{ name: '1' }, { name: '2' }],
    isFetching: false,
    error: false,
    messageError: null,
    type: ''
}

export const useStore = defineStore({
    id: 'item',
    state: () => DEFAULT_STATE,
    getters: {
        items: (state) =>
            state.listItem.reduce((items, item) => {
                items.push({ name: item })
                return items
            }, []),
    },
    actions: {
        getRequest() {
            itemTypes.GET_ITEMS_REQUEST
            this.isFetching = true
        },
        getSuccess(payload) {
            console.log("payload in reducer: ", payload);
            this.listItem = payload,
                console.log("in reducer: ", this.listItem);
            itemTypes.GET_ITEMS_SUCCESS,
                this.isFetching = false
        },
        getFailure() {
            itemTypes.GET_ITEMS_FAILURE
        },
    },
})
