import React, {PropTypes, Component } from 'react'
import AddQuestionnaire from "./AddQuestionnaire ";


const ActionAboveClient = ({updateActivePage}) => {
    return <div className="btn-group">
        <button type="button" className=" btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></button>
        <ul className="dropdown-menu" role="menu">
            <li><a href="#">Посещение</a></li>
            <li><a href="#">Заверщение</a></li>
            <li><a href="#">Покупка товара</a></li>
            <li><a href="#">Покупка абонемента</a></li>
            <li><a href="#">Продление абонемента</a></li>
            <li><a href="#">Заморозить</a></li>
            <li className="divider"></li>
            {/*TODO нужет id */}
            <li><a  onClick={updateActivePage.bind(this, 'singleClient')} href="#">Открыть</a></li>
            <li><a onClick={updateActivePage.bind(this, 'editingClient')} href="#">Редактировать</a></li>
        </ul>
    </div>
}

const StatusAbonements = ({status}) => {
    const statusText = ['Действующий', 'Просрочен', 'Заморожен', 'Ожидающий', 'Истекающий', 'Внимание']
    const statusButton = ['label label-success', 'label label-danger', 'label label-info', 'label label-primary', 'label label-warning', 'label label-important']
    return <h4><span className={statusButton[status]}>{statusText[status]}</span></h4>
}

export default class Clients extends Component {

    componentDidMount(){
        this.props.getAllClientsList(this.props.token)
    }

    render() {
        const {allClientsList} = this.props.clients
        let clients = [];
        if(allClientsList) {

            for (let i = 0; i < allClientsList.length; i++) {
                const clientRow = <tr key={allClientsList[i].id}>
                    <td>
                        <ActionAboveClient
                            updateActivePage = {this.props.updateActivePage}
                        />
                    </td>
                    <td><input type="checkbox"/></td>
                    <td><a href="#" onClick={this.props.getSingleClient.bind(this, allClientsList[i].id)}>{allClientsList[i].lastName} {allClientsList[i].firstName} {allClientsList[i].middleName}</a></td>
                    <td>8-999-999-99-99</td>
                    <td>user@mail.ru</td>
                    <td>В зале</td>
                    <td>111</td>
                    <td><StatusAbonements status={0}/></td>
                </tr>
                clients.push(clientRow);
            }
        }

        return <div>
            <div className="clearfix" style={{background: '#ffffff'}}>
                <form className="navbar-form navbar-left" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Найти</button>
                      </span>
                    </div>
                    <button style={{marginLeft: '10px'}} onClick={this.props.updateActivePage.bind(this, 'addClient')} type="button" className="btn btn-success"><span className="glyphicon glyphicon-plus"></span> Добавить клиента</button>

                </form>
                 </div>
            <div className="col-sm-12" style={{marginTop: '10px'}}>
            <table className="table table-hover" style={{background: '#ffffff'}}>
                <thead>
                <tr>
                    <th></th>
                    <th><input type="checkbox"/></th>
                    <th>ФИО</th>
                    <th>ТЕЛЕФОН</th>
                    <th>EMAIL</th>
                    <th>СТАТУС</th>
                    <th>№ АБОНЕМЕНТА</th>
                    <th>СТАТУС АБОНЕМЕНТА</th>
                </tr>
                </thead>
                <tbody>
                    {allClientsList?clients:''}
                </tbody>
            </table>
            </div>
        </div>
    }
}

Clients.propTypes = {

}
