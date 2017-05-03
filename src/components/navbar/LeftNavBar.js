/**
 * Created by zawar on 03.05.2017.
 */
import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';


export default class LeftNavBar extends Component {

    componentDidMount(){
    }

    render() {
        return <div className="col-sm-3 sidenav hidden-xs">


            <h2>ZAVOD</h2>
            <ul className="nav nav-pills nav-stacked">
                <li className="active"><a href="#section1">Клиенты</a></li>
                <li><a href="#section2">Сотрудники</a></li>
                <li><a href="#section3">Товары</a></li>
                <li><a href="#section4">Абоенементы</a></li>
            </ul>
                <br/>
        </div>
    }
}

LeftNavBar.propTypes = {

}
