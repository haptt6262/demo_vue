import { useStore } from '../reducers/ItemReducer'
import { itemApi } from '../api'

async function getData() {
    const actions = useStore()
    console.log('res saga:')
    await actions.getRequest()
    try {
        let res = await itemApi.getItem()
        var data = res.data
        await actions.getSuccess(data)
    } catch (error) {
        await actions.getFailure(error)
    }
}
async function createNewTeacher(payload) {
    const actions = useStore()
    await actions.addRequest()
    try {
        await itemApi.addItem({ nameTeacher: payload }, null, null)
        await actions.addSuccess()
        await getData()
    } catch (error) {
        await actions.addFailure(error)
    }
}
async function deleteTeacher(payload) {
    const actions = useStore()
    await actions.deleteRequest()
    try {
        await itemApi.deleteItem(null, { id: payload }, null)
        await actions.deleteSuccess()
        await getData()
    } catch (error) {
        await actions.deleteFailure()
    }
}
async function updateTeacher(payload) {
    const actions = useStore()
    await actions.updateRequest()
    try {
        await itemApi.updateItem({ nameTeacher: payload.nameTeacher }, { id: payload.id }, null)
        await actions.updateSuccess()
        await getData()
    } catch (error) {
        await actions.updateFailure()
    }
}

export {
    getData, createNewTeacher, deleteTeacher, updateTeacher
}
