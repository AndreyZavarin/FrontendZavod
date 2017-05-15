/**
 * Created by zawar on 03.05.2017.
 */
import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';


export default class LeftNavBarMini extends Component {

    componentDidMount(){
    }

    render() {
        return <nav className="navbar navbar-inverse visible-xs">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">ZAVOD</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Клиенты</a></li>
                        <li><a href="#">Сотрудники</a></li>
                        <li><a href="#">Товары</a></li>
                        <li><a href="#">Абонементы</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

LeftNavBarMini.propTypes = {

}
