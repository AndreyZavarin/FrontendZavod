/**
 * Created by zawar on 09.05.2017.
 */

import React, {PropTypes, Component } from 'react'

export default class SingleClient extends Component {

    componentDidMount(){
       //this.props.getAllClientsList(this.props.token)
    }

    render() {
        const {clientData} = this.props
        return <div>
            <div className="col-sm-12" style={{background: '#ffffff'}}>
                <h4>Клиент</h4>
            </div>
            <div className="col-sm-12">

            <form className="col-sm-offset-2 form-horizontal">
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label" >Имя</label>
                    <div className="col-sm-4">
                        {clientData.firstName}
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Фамилия</label>
                    <div className="col-sm-4">
                        {clientData.lastName}
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Отчество</label>
                    <div className="col-sm-4">
                        {clientData.middleName}
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Адрес</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Адрес"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Дата рождения</label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Пол</label>
                    <div className="col-sm-4">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Мужской
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Женский
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Телефон</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Телефон"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Эл. почта</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Эл. почта"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-success" >Добавить клиента</button>
                        <button type="submit" className="btn btn-success">Добавить и пройти анкетирование</button>
                        <button type="submit" className="btn btn-default">Отмена</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    }
}

SingleClient.propTypes = {

}
