import React from 'react'

const AuthorizationAdmin = ({onFieldChange, onHandleSubmit}) =>{
    return <div>
        <form onSubmit={onHandleSubmit}>
            <input onChange={onFieldChange.bind(this, 'login')} type="text" placeholder="Логин"/>
            <input onChange={onFieldChange.bind(this, 'password')} type="password" placeholder="Пароль"/>
            <button>Войти</button>
        </form>
    </div>
}

export default AuthorizationAdmin