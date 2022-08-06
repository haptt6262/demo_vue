import { REST_API_METHOD as METHOD, BASE_URL } from '../constants/index';
const API_SCHEME = {
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
    },
    //business API
    ITEMS: {
        GET: {
            url: `${BASE_URL}/teacher`,
            method: METHOD.GET
        },
        SEARCH: {
            url: `${BASE_URL}/search`,
            method: METHOD.SEARCH
        },
        ADD: {
            url: `${BASE_URL}/teacher`,
            method: METHOD.POST
        },
        UPDATE: {
            url: `${BASE_URL}/teacher/update/:id`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/teacher/delete/:id`,
            method: METHOD.DELETE
        },
    },
    STUDENTS: {
        GET: {
            url: `${BASE_URL}/stu`,
            method: METHOD.GET
        },
        ADD: {
            url: `${BASE_URL}/stu`,
            method: METHOD.POST
        },
        UPDATE: {
            url: `${BASE_URL}/stu/update/:id_student`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/stu/delete/:id`,
            method: METHOD.DELETE
        },
    }
}

export default API_SCHEME