/**
 * Created by zawar on 09.05.2017.
 */

import React, {PropTypes, Component } from 'react'

export default class EditingClient extends Component {

    componentDidMount(){
       //this.props.getAllClientsList(this.props.token)
    }

    // setValueFinlds(id ){}


    render() {
        const {editingClientData} = this.props

        return <div>
            <div className="col-sm-12" style={{background: '#ffffff'}}>
                <ul className="breadcrumb" style={{background: '#fff', fontSize: '16px'}}>
                    <li><a style={{ color: '#666666'}} onClick={this.props.updateActivePage.bind(this, 'clients')} href="#">Клиенты</a> <span className="divider"></span></li>
                    <li className="active"><span className="glyphicon glyphicon-edit"></span> Редактирование клиента</li>
                </ul>
            </div>
            <div className="col-sm-12">

            <form className="col-sm-offset-2 form-horizontal" style={{marginTop: '5%'}}>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label"  >Имя</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Имя" value="Сергей"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Фамилия</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="" value="Иванов"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Отчество</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="" value="Отчество"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Адрес</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Адрес" value="г. Пенза, ул. Плеханова 4а"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Дата рождения</label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control" id="inputEmail3" value="15.01.17" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Пол</label>
                    <div className="col-sm-4">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked="true"/> Мужской
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
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Телефон" value="8-937-212-33-44"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Эл. почта</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Эл. почта" value="avan@mail.ru"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10" style={{marginTop: '80px'}}>
                        <button type="submit" className="btn btn-success" style={{margin:'0 10px 0 10px'}}>Сохранить</button>
                        <button type="submit" className="btn btn-default" style={{margin:'0 10px 0 10px'}}>Отмена</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    }
}

EditingClient.propTypes = {

}
