import { defineStore } from 'pinia'
import { itemTypes } from '../constants/actionsType/index'
const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: ''
}

export const useStore = defineStore({
    id: 'item',
    state: () => DEFAULT_STATE,
    actions: {
        getRequest() {
            itemTypes.GET_ITEMS_REQUEST
            this.isFetching = true
        },
        getSuccess(payload) {
            console.log("payload in reducer: ", payload);
            this.listItem = payload,
                // console.log("in reducer: ", this.listItem);
                itemTypes.GET_ITEMS_SUCCESS,
                this.isFetching = false
        },
        getFailure() {
            itemTypes.GET_ITEMS_FAILURE
        },
        addRequest() {
            itemTypes.ADD_ITEMS_REQUEST
            this.isFetching = true
        },
        addSuccess() {
            itemTypes.ADD_ITEMS_SUCCESS
            this.isFetching = false
        },
        addFailure() {
            itemTypes.ADD_ITEMS_FAILURE
        },
        deleteRequest() {
            itemTypes.DELETE_ITEMS_REQUEST
            this.isFetching = true
        },
        deleteSuccess() {
            itemTypes.DELETE_ITEMS_SUCCESS
            this.isFetching = false
        },
        deleteFailure() {
            itemTypes.DELETE_ITEMS_FAILURE
        },
        updateRequest() {
            itemTypes.UPDATE_ITEMS_REQUEST
            this.isFetching = true
        },
        updateSuccess() {
            itemTypes.UPDATE_ITEMS_SUCCESS
            this.isFetching = false
        },
        updateFailure() {
            itemTypes.UPDATE_ITEMS_FAILURE
        }
    },
})
