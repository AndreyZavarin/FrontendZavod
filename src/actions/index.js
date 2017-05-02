import { get,  post} from '../api'

import {AUTHORIZATION_ADMIN} from '../constants/App'
import fetch from 'isomorphic-fetch'


export function updateToken(data) {
    return{
        type: AUTHORIZATION_ADMIN,
        data: data
    }
}
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
        }).then(response => {
            console.log(response.json())
        })
    }
}

/**
 * Создание клиента
 * @param token
 * @returns {Function}
 */
export function addClient(token) {
    return function (dispatch) {
        return fetch('https://leha-plant-demo.herokuapp.com/client/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Auth-Token': token
            },
            body: JSON.stringify({
                "id":-1,
                "firstName":"NIKITA2",
                "lastName":"BOZHEV",
                "middleName":"IGOREVICH",
                "gender":"MALE",
                "birthDate":[2002,6,23],
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

/**
 * Получить данные клиента по id
 * @param id
 * @param token
 * @returns {Function}
 */
export function getSingleClient(id, token) {
    return function (dispatch) {
        return fetch('https://leha-plant-demo.herokuapp.com/client/' + id, {
            method: 'GET',
            headers: {
                'X-Auth-Token': token,
            },
        }).then(response => {
            console.log(response.json())
        })
    }
}


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