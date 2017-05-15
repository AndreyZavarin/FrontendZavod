/**
 * Created by zawar on 09.05.2017.
 */

import React, {PropTypes, Component } from 'react'

export default class AddClient extends Component {

    componentDidMount(){

    }

    render() {
        const {onFieldChange} = this.props

        return <div>
            <div className="col-sm-12" style={{background: '#ffffff'}}>
                <ul className="breadcrumb" style={{background: '#fff', fontSize: '16px'}}>
                    <li><a style={{ color: '#666666'}} onClick={this.props.updateActivePage.bind(this, 'clients')} href="#">Клиенты</a> <span className="divider"></span></li>
                    <li className="active"><span className="glyphicon glyphicon-plus"></span> Добавление клиента</li>
                </ul>
            </div>
            <div className="col-sm-12" style={{marginTop: '5%'}}>
                <form onSubmit={this.props.addClient.bind(this)} className="col-sm-offset-2 form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label" >Имя</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'firstName')} type="text" className="form-control" id="firstName" placeholder="Имя"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Фамилия</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'lastName')} type="text" className="form-control" id="lastName" placeholder="Фамилия"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-2 control-label">Отчество</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'middleName')} type="text" className="form-control" id="middleName" placeholder="Отчество"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Адрес</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'address')} type="text" className="form-control" id="address" placeholder="Адрес"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Дата рождения</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'birthDate')} type="date" className="form-control" id="birthDate" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Пол</label>
                        <div className="col-sm-4">
                            <div className="radio">
                                <label class="radio-inline">
                                    <input onChange={onFieldChange.bind(this,'gender')} type="radio" id="gender" value="MALE"/> Мужской
                                </label>
                                <label class="radio-inline">
                                    <input onChange={onFieldChange.bind(this,'gender"')} type="radio" id="gender" value="FEMALE"/> Женский
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Телефон</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'phone')} type="text" className="form-control" id="phone" placeholder="Телефон"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Эл. почта</label>
                        <div className="col-sm-4">
                            <input onChange={onFieldChange.bind(this,'email')} type="email" className="form-control" id="email" placeholder="Эл. почта"/>
                        </div>
                    </div>

                    <div className="form-group" style={{marginTop: '80px'}}>
                        <div className="col-sm-offset-1 col-sm-10">
                            <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Добавить клиента</button>
                            <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Добавить и пройти анкетирование</button>
                            <button type="submit" className="btn btn-default" style={{margin:'0 10px 0 10px'}}>Отмена</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

AddClient.propTypes = {

}
