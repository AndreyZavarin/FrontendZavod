import React from 'react'
import '../../style/auth.css'

const AuthorizationAdmin = ({onFieldChange, onHandleSubmit}) =>{
return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form onSubmit={onHandleSubmit} id="login-form" action="#" method="post" role="form"  style={{display: "block"}}>
                                        <h2>Авторизация</h2>
                                        <div className="form-group">
                                            <input onChange={onFieldChange.bind(this, 'login')} type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Логин" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Пароль" />
                                        </div>
                                        <div className="col-xs-12 form-group pull-right">
                                            <input onChange={onFieldChange.bind(this, 'password')} type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" style={{color: '#ffffff'}} value="Войти" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default AuthorizationAdmin