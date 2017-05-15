/**
 * Created by zawar on 03.05.2017.
 */
import React, {PropTypes, Component } from 'react'

export default class LeftNavBar extends Component {

    componentDidMount(){
    }

    render() {

        return <div className="col-sm-2 sidenav hidden-xs" style={{background: "#333333", minWidth: '250px'}}>
            <div className="img-responsive phone-disc"
                 style={{padding: '5px', height: '50px', fontFamily: 'Stencil', fontSize: '40px', textAlign: 'center', color: "#ffffff"}}>
                ZAVOD
            </div>

            <ul className="nav nav-pills nav-stacked left-nav-bar">
                <li className="active"><a href="#section1"><span className="glyphicon glyphicon-user"></span> Клиенты</a></li>
                <li><a href="#section2"><span className="glyphicon glyphicon-user "></span> Сотрудники</a></li>
                <li><a href="#section3"><span className="glyphicon glyphicon-tasks"></span> Товары</a></li>
                <li><a href="#section4"><span className="glyphicon glyphicon-list-alt"></span> Абонементы</a></li>
            </ul>
                <br/>
        </div>
    }
}

LeftNavBar.propTypes = {

}