/**
 * Created by zawar on 09.05.2017.
 */

import React, {PropTypes, Component } from 'react'

import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'

export default class AddSubscriptions extends Component {

    componentDidMount(){

    }

    render() {
        const {firstName, lastName, middleName} = this.props.clientData

        const addSubscriptions = (
            <Form
                onSubmit={(values) => {
                    // this.props.addClient(values)
                }}
                validate={values => {
                    const {firstName    , lastName, middleName, address, birthDate, phone, email, gender} =  values
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
                                <label className="col-sm-2 control-label" >Клиент:</label>
                                <div className="col-sm-4">
                                    {lastName + ' '}
                                    {firstName + ' '}
                                    {middleName}
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Тарифы:</label>
                                <div className="col-sm-4">
                                    <Select
                                        field='tariff'
                                        options={[{
                                            label: 'Single',
                                            value: 'single'
                                        }, {
                                            label: 'In a Relationship',
                                            value: 'relationship'
                                        }, {
                                            label: 'It\'s Complicated',
                                            value: 'complicated'
                                        }]}
                                    />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-2 control-label">Отчество</label>
                                <div className="col-sm-4">
                                    <Text field='middleName' className="form-control" placeholder='Отчество' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Адрес</label>
                                <div className="col-sm-4">
                                    <Text field='address' className="form-control" placeholder='Адрес' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Дата рождения</label>
                                <div className="col-sm-4">
                                    <Text type="date"  field='birthDate' className="form-control" />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Пол</label>
                                <div className="col-sm-4">
                                    <div className="radio">

                                        <RadioGroup field="gender">
                                            <label>
                                                <Radio
                                                    value='MALE'
                                                />
                                                <span>Мужской</span>
                                            </label>
                                            <label>
                                                <Radio
                                                    value='FEMALE'
                                                />
                                                <span>Женский</span>
                                            </label>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Телефон</label>
                                <div className="col-sm-4">
                                    <Text field='phone' className="form-control" placeholder='Телефон' />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-2 control-label">Эл. почта</label>
                                <div className="col-sm-4">

                                </div>
                            </div>

                            <div className="form-group clearfix" style={{marginTop: '80px'}}>
                                <div className="col-sm-offset-1 col-sm-10">
                                    <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Добавить клиента</button>
                                    <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Добавить и пройти анкетирование</button>
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
                    <li className="active"><span className="glyphicon glyphicon-plus"></span> Покупка абонемента</li>
                </ul>
            </div>
            <div className="col-sm-12" style={{marginTop: '5%'}}>
                {myForm}
            </div>

        </div>
    }
}

AddSubscriptions.propTypes = {

}
