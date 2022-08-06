<template>
    <div id="app">
        <div class="teacher">
            <div>
                <input v-model="nameTeacher" @input="handleInput">
                <button @click="handleAdd">ADD</button>
                <button @click="updateTeacher({ id: idTeacher, nameTeacher: nameTeacher })">UPDATE</button>
                <Button>ADD</Button>
            </div>
            <div>
                <h1>Teacher</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name_teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row" v-for="item in itemReducer.$state.listItem" :key="item">
                            <td>
                                {{ item.id }}
                            </td>
                            <td>{{ item.nameTeacher }}</td>
                            <td>
                                <button @click="deleteTeacher(item.id)">DELETE</button>
                            </td>
                            <td>
                                <button
                                    @click="handleSelect({ id: item.id, nameTeacher: item.nameTeacher })">Select</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <div class="student-form">
                <input type="text" v-model="nameStudent" placeholder="name student">
                <input type="text" v-model="email" placeholder="email student">
                <label for="teacherSelected">Choose an id teacher:</label>
                <select name="teacherSelected" id="teacherSelected" v-model="idTeacher">
                    <option v-for="item in itemReducer.$state.listItem" :key="item">{{
                            item.id
                    }}</option>
                </select>

                <button
                    @click="addStudent({ nameStudent: nameStudent, email: email, id_teacher: idTeacher })">ADD</button>
                <button
                    @click="updateStudent({ id: idStudent, nameStudent: nameStudent, email: email, id_teacher: idTeacher })">Update</button>
            </div>
            <div>
                <h1>Student</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Name_teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student in studentReducer.$state.listItem" :key="student">
                            <td scope="row">{{ student.id }}</td>
                            <td>{{ student.nameStudent }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.name_Gv }}</td>
                            <td>
                                <button @click="deleteStudent(student.id)">DELETE</button>
                            </td>
                            <td>
                                <button
                                    @click="handleSelectStu({ id: student.id, nameStudent: student.nameStudent, email: student.email })">Select</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import { ref, defineComponent, onMounted } from "vue";
import { useStore } from "../reducers/itemReducer";
import { useStudentStore } from '../reducers/StudentReducer'
import { getData, updateTeacher, createNewTeacher, deleteTeacher } from '../sagas/ItemSaga'
import { getStudent, addStudent, deleteStudent, updateStudent } from '../sagas/StudentSaga'
import { Button } from 'ant-design-vue'

export default defineComponent({
    name: "App",
    setup() {
        const itemReducer = useStore();
        const studentReducer = useStudentStore()
        const nameTeacher = ref('')
        const idTeacher = ref('')
        const nameStudent = ref('')
        const email = ref('')
        const idStudent = ref('')
        const selected = ref('')

        onMounted(() => {
            getData()
            getStudent()
        })

        return {
            itemReducer, Button, studentReducer, nameTeacher, deleteTeacher, updateTeacher, idTeacher, nameStudent, email, addStudent, selected, deleteStudent, idStudent, updateStudent
        };
    },
    methods: {
        handleInput(e) {
            this.nameTeacher = e.target.value
        },
        handleSelect(data) {
            this.nameTeacher = data.nameTeacher
            this.idTeacher = data.id
        },
        handleAdd() {
            createNewTeacher(this.nameTeacher)
        },
        handleSelectOption(data) {
            this.idTeacher = data
        },
        handleSelectStu(data) {
            console.log("data update: ", data);
            this.nameStudent = data.nameStudent
            this.idStudent = data.id
            this.email = data.email
        }
    }
});

</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 1rem 2rem;
    display: flex !important;

}

footer {
    font-size: 0.75rem;
    text-align: right;
    color: darkgray;
}

.teacher {
    margin: 0 20px !important;
}

.student-form {
    display: flex !important;
    flex-direction: column;

}
</style>