
import {
    AUTHORIZATION_ADMIN,
    UPDATE_CLIENT_LIST,
    UPDATE_ACTIVE_PAGE,
    EDITING_CLIENT,
    GET_SINGLE_CLIENT,

    UPDATE_PRODUCT_LIST,
    GET_SINGLE_PRODUCT,
    EDITING_PRODUCT
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
export function addClient(body) {
    console.log(body)
    console.log('----addClient')
    return function (dispatch, getState) {
        const state = getState()
        console.log(state.authorization.token)

        return fetch('https://leha-plant-demo.herokuapp.com/client/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Auth-Token': state.authorization.token
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateClientList(json))
                }
            ).catch(response => {
                //TODO если отвалился сервер
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


// FROM PRODUCTS
export function updateProductList(data) {
    console.log(data.content)
    return{
        type: UPDATE_PRODUCT_LIST,
        data: data.content
    }
}

/**
 * Получение списка продуктов
 * @param token
 * @returns {Function}
 */
export function getAllProductsList (token) {
    return function (dispatch) {
        return fetch('https://leha-plant-demo.herokuapp.com/products/all', {
            method: 'GET',
            headers: {
                'X-Auth-Token': token,
            },

        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateProductList(json))
                }
            ).catch(response => {

            })
    }
}

/**
 * Получение продуrта по id
 * @param token
 * @returns {Function}
 */
export function getSingleProduct (id) {
    return function (dispatch, getState) {
        const state = getState();
        return fetch('https://leha-plant-demo.herokuapp.com/product/'+ id, {
            method: 'GET',
            headers: {
                'X-Auth-Token': state.authorization.token,
            },

        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateActivePage('singleProduct'))
                    dispatch({type: GET_SINGLE_PRODUCT, data: json})
                }
            ).catch(response => {
            })
    }
}

/**
 * Обновление данных продукта
 * @param id
 * @param token
 * @returns {Function}
 */
export function updateProduct(id, token, body) {
    return function (dispatch) {
        return fetch('http://localhost:8080/product/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Auth-Token': token
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(json => {
                    console.log(json)
                    dispatch(updateProductList(json))
                }
            ).catch(response => {
            })
    }
}