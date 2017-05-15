
import {
    AUTHORIZATION_ADMIN,
    UPDATE_CLIENT_LIST,
    UPDATE_ACTIVE_PAGE,
    EDITING_CLIENT,
    GET_SINGLE_CLIENT
} from '../constants/App'
import fetch from 'isomorphic-fetch'


export function updateToken(data) {
    return{
        type: AUTHORIZATION_ADMIN,
        data: data
    }
}

export function updateClientList(data) {
    console.log(data.content)
    return{
        type: UPDATE_CLIENT_LIST,
        data: data.content
    }
}

export function updateActivePage(newPage) {
    console.log(newPage)
    return{
        type: UPDATE_ACTIVE_PAGE,
        data: newPage
    }
}


// export function parseClientList(data) {
//     return{
//         type: UPDATE_CLIENT_LIST,
//         data: data
//     }
// }

/**
 * Авторизация админимтратора
 * @param number
 * @param phone
 * @returns {Function}
 */
export function authorizationAdmin(number, phone) {
    return function (dispatch) {
        return fetch('https://leha-plant-demo.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                'username': "admin",
                'password': "password",
            })
        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateToken(json))
                    dispatch(updateActivePage('clients'))
                }
            ).catch(response => {

            })
    }
}

/**
 * Получение списка клиентов
 * @param token
 * @returns {Function}
 */
export function getAllClientsList (token) {
    return function (dispatch) {
        return fetch('https://leha-plant-demo.herokuapp.com/client/all', {
            method: 'GET',
            headers: {
                'X-Auth-Token': token,
            },

        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateClientList(json))
                }
            ).catch(response => {

            })
    }
}
/**
 * Получение клиента по id
 * @param token
 * @returns {Function}
 */
export function getSingleClient (id) {
    return function (dispatch, getState) {
        const state = getState();
        return fetch('https://leha-plant-demo.herokuapp.com/client/'+ id, {
            method: 'GET',
            headers: {
                'X-Auth-Token': state.authorization.token,
            },

        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateActivePage('singleClient'))
                    dispatch({type: GET_SINGLE_CLIENT, data: json})
                    //dispatch(updateClientList(json))
                }
            ).catch(response => {

            })
    }
}



/**
 * Создание клиента
 * @returns {Function}
 */
export function addClient(data) {
    console.log(data)
    return function (dispatch, getState) {
        const state = getState()
        console.log(state.authorization.token)

        let body = {
            "id":-1,
            "firstName":data.firstName,
            "lastName":data.lastName,
            "middleName":data.middleName,
            "gender":data.gender,
            "birthDate":[2002,6,23],
            "subscriptions":[]
        }

        return fetch('https://leha-plant-demo.herokuapp.com/client/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Auth-Token': state.authorization.token
            },
            body: JSON.stringify(body)

            // {
            //    // body
            //     "id":-1,
            //     "firstName":"NIKITA3",
            //     "lastName":"BOZHEV",
            //     "middleName":"IGOREVICH",
            //     "gender":"MALE",
            //     "birthDate":[2002,6,23],
            //     "subscriptions":[]
            // })
        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateClientList(json))
                }
            ).catch(response => {

            })
    }
}

/**
 * Получить данные клиента по id
 * @param id
 * @param token
 * @returns {Function}
 */
// export function getSingleClient(id, token) {
//     return function (dispatch) {
//         return fetch('https://leha-plant-demo.herokuapp.com/client/' + id, {
//             method: 'GET',
//             headers: {
//                 'X-Auth-Token': token,
//             },
//         }).then(response => {
//             console.log(response.json())
//         })
//     }
// }


/**
 * Обновление данных клиента
 * @param id
 * @param token
 * @returns {Function}
 */
export function updateClient(id, token) {
    return function (dispatch) {
        return fetch('http://localhost:8080/client/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Auth-Token': token
            },
            body: JSON.stringify({
                "id":2,
                "firstName":"ANDREY",
                "lastName":"ODINOKOV",
                "middleName":"ALEXANDROVICH",
                "gender":"MALE",
                "birthDate":[1992,6,16],
                "subscriptions":[]
            })
        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateToken(json))
                }
            ).catch(response => {

            })
    }
}