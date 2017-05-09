/**
 * Created by zawar on 03.05.2017.
 */
import React, {PropTypes, Component } from 'react'

export default class LeftNavBar extends Component {

    componentDidMount(){
    }

    render() {
        return <div className="col-sm-2 sidenav hidden-xs" style={{background: "#333366"}}>
            <div className="img-responsive phone-disc"
                 style={{width: "200px",height: "48px", background: "url(/src/img/logo_zavod_mini.png) 100% 100% no-repeat"}}>
            </div>

            <ul className="nav nav-pills nav-stacked">
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