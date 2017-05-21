/**
 * Created by zawar on 09.05.2017.
 */

import React, {PropTypes, Component } from 'react'

import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'





export default class VisitWithoutRegistration extends Component {

    componentDidMount(){

    }

    render() {
        const {onFieldChange} = this.props

        const myForm = (
            <Form
                onSubmit={(values) => {
                    values.birthDate = values.birthDate.split('-')
                    console.log('Success!', values)
                }}
                validate={values => {
                    const {firstName, lastName, middleName, address, birthDate, phone, email, gender} =  values
                    return {
                        firstName: !firstName ? 'Поле обязательно для заполнения!' : undefined,
                        lastName: !lastName ?'Поле обязательно для заполнения!' : undefined,
                        middleName: !middleName ?'Поле обязательно для заполнения!' : undefined,
                        address: !address ?'Поле обязательно для заполнения!' : undefined,
                        birthDate: !birthDate ?'Поле обязательно для заполнения!' : undefined,
                        gender: !gender ?'Поле обязательно для заполнения!' : undefined,
                        phone: !phone ?'Поле обязательно для заполнения!' : undefined,
                        email: !email ?'Поле обязательно для заполнения!' : undefined,
                    }
                }}
            >
                {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm} className="col-sm-offset-2 form-horizontal">
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label" >Имя</label>
                                <div className="col-sm-4">
                                    <Text field='firstName' className="form-control" placeholder='Имя' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Фамилия</label>
                                <div className="col-sm-4">
                                    <Text field='lastName' className="form-control" placeholder='Фамилия' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-2 control-label">Отчество</label>
                                <div className="col-sm-4">
                                    <Text field='middleName' className="form-control" placeholder='Отчество' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-2 control-label">Примечание</label>
                                <div className="col-sm-4">
                                    <Text field='note' className="form-control" placeholder='Примечание' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-2 control-label">Тариф</label>
                                <div className="col-sm-4">
                                    <select className="form-control" id="sel1">
                                        <option>Семинар по джиуджитсу</option>
                                        <option>Разовый-взрослый</option>
                                        <option>Разовый-детский</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-2 control-label">Стоимость</label>
                                <div className="col-sm-4">
                                    <Text field='price' className="form-control" placeholder='Примечание' value="700"/>
                                </div>
                            </div>

                            <div className="form-group clearfix" style={{marginTop: '80px'}}>
                                <div className="col-sm-offset-1 col-sm-10">
                                    <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Продать</button>
                                    <button type="submit" className="btn btn-default" style={{margin:'0 10px 0 10px'}}>Отмена</button>
                                </div>
                            </div>
                        </form>
                    )
                }}
            </Form>
        )

        return <div>
            <div className="col-sm-12" style={{background: '#ffffff'}}>
                <ul className="breadcrumb" style={{background: '#fff', fontSize: '16px'}}>
                    <li><a style={{ color: '#666666'}} onClick={this.props.updateActivePage.bind(this, 'clients')} href="#">Клиенты</a> <span className="divider"></span></li>
                    <li className="active"><span className="glyphicon glyphicon-user"></span> Посещение без регистрации</li>
                </ul>
            </div>
            <div className="col-sm-12" style={{marginTop: '5%'}}>
                {myForm}
            </div>

        </div>
    }
}

VisitWithoutRegistration.propTypes = {

}
