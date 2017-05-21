import React, {PropTypes, Component } from 'react'
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'

export default class AddQuestionnaire extends Component {

    componentDidMount(){
       //this.props.getAllClientsList(this.props.token)
    }

    render() {
        const marginLeft = { marginLeft: '10px'}

        const addQuestionnaire = (

            <Form
                onSubmit={(values) => {
                    this.props.updateActivePage('clients')
                }}
                validate={values => {
                    // const {firstName, lastName, middleName, address, birthDate, phone, email, gender} =  values
                    return {
                        // firstName: !firstName ? 'Поле обязательно для заполнения!' : undefined,
                        // lastName: !lastName ?'Поле обязательно для заполнения!' : undefined,
                        // middleName: !middleName ?'Поле обязательно для заполнения!' : undefined,
                        // address: !address ?'Поле обязательно для заполнения!' : undefined,
                        // birthDate: !birthDate ?'Поле обязательно для заполнения!' : undefined,
                        // gender: !gender ?'Поле обязательно для заполнения!' : undefined,
                        // phone: !phone ?'Поле обязательно для заполнения!' : undefined,
                        // email: !email ?'Поле обязательно для заполнения!' : undefined,
                    }
                }}
            >
                {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm} className="col-sm-offset-1 form-horizontal">
                            <div className="form-group clearfix">
                                <label className="col-sm-3 control-label" >Занимались ли вы спортом?</label>
                                <div className="col-sm-4">
                                    <div className="radio">
                                        <RadioGroup field="sport">
                                            <label>
                                                <Radio
                                                    value='yes'
                                                />
                                                <span>ДА</span>
                                            </label>
                                            <label style={ marginLeft }>
                                                <Radio
                                                    value='no'
                                                />
                                                <span>НЕТ</span>
                                            </label>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-3 control-label" >Проходили ли вы мед осмотр?</label>
                                <div className="col-sm-4">
                                    <div className="radio">
                                        <RadioGroup field="sport">
                                            <label>
                                                <Radio
                                                    value='yes'
                                                />
                                                <span>ДА</span>
                                            </label>
                                            <label style={ marginLeft }>
                                                <Radio
                                                    value='no'
                                                />
                                                <span>НЕТ</span>
                                            </label>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="col-sm-3 control-label">Ознакомлены ли Вы с правилами клуба?</label>
                                <div className="col-sm-4">
                                    <div className="radio">
                                        <RadioGroup field="rules">
                                            <label >
                                                <Radio
                                                    value='yes'
                                                />
                                                <span>ДА</span>
                                            </label>
                                            <label style={ marginLeft }>
                                                <Radio
                                                    value='no'
                                                />
                                                <span>НЕТ</span>
                                            </label>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-3 control-label">Укажите основную причину выбора «ZAVOD»</label>
                                <div className="col-sm-4">
                                  <div className="checkbox">
                                      <label>
                                          <Checkbox
                                              field='mainReason'
                                              value="1"
                                          />
                                          Удобное расположение
                                      </label>
                                  </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Приемлемые цены
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Профессионализм тренеров
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Наличие парковки
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Другое (указать)

                                        </label>
                                        <Text field='other' className="form-control" placeholder='Другое' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label  className="col-sm-3 control-label">Какой вид абонемента Вы хотите приобрести?</label>
                                <div className="col-sm-4">
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Разовый
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            На 12 занятий
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Годовой
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            Полугодовой
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                            На три месяца

                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <Checkbox
                                                field='mainReason'
                                                value="1"
                                            />
                                           На месяц
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix" style={{marginTop: '80px'}}>
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Добавить анкету</button>
                                    <button  onClick={this.props.updateActivePage.bind(this, 'clients')} type="submit" className="btn btn-default" style={{margin:'0 10px 0 10px'}}>Отмена</button>
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
                    <li className="active"><span className="glyphicon glyphicon-plus"></span> Добавление анкеты</li>
                </ul>
            </div>

            <div className="col-sm-12" style={{marginTop: '5%'}}>
                {addQuestionnaire}
            </div>
        </div>
    }
}

AddQuestionnaire.propTypes = {}
