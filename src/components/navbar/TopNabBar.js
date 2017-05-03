/**
 * Created by zawar on 03.05.2017.
 */
import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';


export default class TopNabBar extends Component {

    componentDidMount(){
    }

    render() {
        return <div className="col-sm-9" style={{background: "#22d686"}}>
            <div className="col-sm-6">
                <h4>ZAVOD</h4>
            </div>
            <div className="col-sm-6">
                <div className="btn-group pull-right"  style={{padding: "10px"}}>
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Администратор <span className="caret"></span></button>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Редактирование профиля</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Выйти</a></li>
                    </ul>
                </div>

                <div className="btn-group pull-right" style={{marginRight: "20px", padding: "10px"}}>
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Добавить ... <span className="caret"></span></button>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Клиенты</a></li>
                        <li><a href="#">Сотрудника</a></li>
                        <li><a href="#">Абонемент</a></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

TopNabBar.propTypes = {

}