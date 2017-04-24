
import { get,  post} from '../api'
import {AUTHORIZATION_ADMIN} from '../constants/App'
import fetch from 'isomorphic-fetch'

export const authorizationAdmin = (login, password) => {
    console.log("-----------------------")
    return(dispatch) => {
        return fetch('https://leha-plant-demo.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                username: "admin",
                password: "password",
            })
        }).then(response => response.json())
                .then(json =>
                   // dispatch(ttt(json))
                    console.log(json)
                ).catch(response => {

                })
    }



    //
    //     fetch('/auth/l', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             'login': login,
    //             'password': password
    //         })
    //     }).then(response => response.json())
    //         .then(json =>
    //            // dispatch(ttt(json))
    //             console.log(json)
    //         ).catch(response => {
    //
    //
    //         })
    // }
}


//
// export const authorizationAdmin = (login, password) => {
//     console.log("-----------------------")


//
// export const BIDS_INFO = 'BIDS_INFO'
// export const updateBids = (data) => {
//   return {
//     type: BIDS_INFO,
//     data: data
//   }
// }
//
// export const TAKE_BREAK = 'TAKE_BREAK'
// export const takeBreak = () => {
//   return (dispatch, getState) => {
//       dispatch({ type: TAKE_BREAK})
//       return get('take-break')
//         .then(json => {
//               dispatch(updateBids(json))
//           }
//       )
//   }
// }
/*
 console.debug("asdasdsd")
 return post('/auth/login', {'login': login, 'password': password})
 .then(json => {
 dispatch({type: AUTHORIZATION_ADMIN, data: json})
 }
 )
 */

//
//
// export const authorizationAdmin = (login, password) => {
//     console.log("-----------------------")
//     return(dispatch) => {
//         return fetch('/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({
//                 'login': login,
//                 'password': password
//             })
//         }).then(response => response.json())
//             .then(json =>
//                // dispatch(ttt(json))
//                 console.log(json)
//             ).catch(response => {
//
//
//             })
//     }
// }
//
// export const  ttt = (data) => {
//     return {
//         type: AUTHORIZATION_ADMIN,
//         data: data
//     }
// }

