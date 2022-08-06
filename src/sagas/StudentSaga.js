import { useStudentStore } from '../reducers/StudentReducer'
import { studentApi } from '../api/index'

async function getStudent() {
    const actions = useStudentStore()
    await actions.getRequest()
    try {
        let res = await studentApi.getStudent()
        await actions.getSuccess(res.data)
    } catch (error) {
        await actions.getFailure(error)
    }
}
async function addStudent(payload) {
    const actions = useStudentStore()
    await actions.addRequest()
    try {
        await studentApi.addStudent({ nameStudent: payload.nameStudent, email: payload.email, id_teacher: payload.id_teacher }, null, null)
        await actions.addSuccess()
        await getStudent()
    } catch (error) {
        await actions.addFailure(error)
    }
}
async function deleteStudent(payload) {
    console.log("payload in saga: ", payload);
    const actions = useStudentStore()
    await actions.deleteRequest()
    try {
        await studentApi.deleteStudent(null, { id: payload }, null)
        await actions.deleteSuccess()
        await getStudent()
    } catch (error) {
        await actions.deleteFailure(error)
    }
}
async function updateStudent(payload) {
    console.log("payload in saga: ", payload);
    const actions = useStudentStore()
    await actions.updateRequest()
    try {
        await studentApi.updateStudent({ nameStudent: payload.nameStudent, email: payload.email, id_teacher: payload.id_teacher }, { id_student: payload.id }, null)
        await actions.updateSuccess()
        await getStudent()
    } catch (error) {
        await actions.updateFailure(error)
    }
}

export {
    getStudent, addStudent, deleteStudent, updateStudent
}