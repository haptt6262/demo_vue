import { defineStore } from 'pinia'
import { itemTypes } from '../constants/actionsType/index'
const INITIAL_STATE = {
    listItem: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: ''
}

export const useStudentStore = defineStore({
    id: 'student',
    state: () => INITIAL_STATE,
    actions: {
        getRequest() {
            itemTypes.GET_STUDENT_REQUEST
            this.isFetching = true
        },
        getSuccess(payload) {
            console.log("payload student in reducer: ", payload);
            this.listItem = payload,
                console.log("in reducer: ", this.listItem);
            itemTypes.GET_STUDENT_SUCCESS,
                this.isFetching = false
        },
        getFailure() {
            itemTypes.GET_STUDENT_FAILURE
        },
        addRequest() {
            itemTypes.ADD_STUDENT_REQUEST
            this.isFetching = true
        },
        addSuccess() {
            itemTypes.ADD_STUDENT_SUCCESS
            this.isFetching = false
        },
        addFailure() {
            itemTypes.ADD_STUDENT_FAILURE
        },
        deleteRequest() {
            itemTypes.DELETE_STUDENT_REQUEST
            this.isFetching = true
        },
        deleteSuccess() {
            itemTypes.DELETE_STUDENT_SUCCESS
            this.isFetching = false
        },
        deleteFailure() {
            itemTypes.DELETE_STUDENT_FAILURE
        },
        updateRequest() {
            itemTypes.UPDATE_STUDENT_REQUEST
            this.isFetching = true
        },
        updateSuccess() {
            itemTypes.UPDATE_STUDENT_SUCCESS
            this.isFetching = false
        },
        updateFailure() {
            itemTypes.UPDATE_STUDENT_FAILURE
        }
    },
})
