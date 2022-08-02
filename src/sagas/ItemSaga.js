import { useStore } from '../reducers/itemReducer'
import { itemApi } from '../api'

async function getData() {
    const actions = useStore()
    await actions.getRequest()
    try {
        let res = await itemApi.getItem()
        console.log('res saga: ', res)
        var data = res.data
        await actions.getSuccess(data)
    } catch (error) {
        await actions.getFailure(error)
    }
}

export {
    getData
}
