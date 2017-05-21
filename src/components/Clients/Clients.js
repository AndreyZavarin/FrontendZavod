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
    return <h4><span style={{width: '110px', display: 'block'}} className={statusButton[status]}>{statusText[status]}</span></h4>
}

export default class Clients extends Component {

    componentDidMount(){
        this.props.getAllClientsList(this.props.token)
    }

    render() {
        const {allClientsList} = this.props.clients
        let clients = [];
        if(allClientsList) {
            const testMas = [
                ['8-937-212-33-44', 'avan@mail.ru', 'В зале', '01', '0'],
                ['8-937-666-37-14', 'avan@mail.ru', 'Отсутствует', '02', '1'],
                ['8-937-254-66-64', 'avan@mail.ru', 'В зале', '03', '0'],
                ['8-937-223-22-84', 'avan@mail.ru', 'Отсутствует', '04', '3'],
                ['8-937-265-11-99', 'avan@mail.ru', 'В зале', '05', '0'],
                ['8-937-217-12-40', 'avan@mail.ru', 'В зале', '06', '0'],
                ['8-937-215-33-15', 'avan@mail.ru', 'Отсутствует', '07', '4'],
                ['8-937-243-45-56', 'avan@mail.ru', 'Отсутствует', '08', '0'],
                ['8-937-267-12-78', 'avan@mail.ru', 'Отсутствует', '09', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
                ['8-937-207-33-01', 'avan@mail.ru', 'Отсутствует', '10', '0'],
            ]

            for (let i = 0; i < allClientsList.length; i++) {
                const clientRow = <tr key={allClientsList[i].id}>
                    <td>
                        <ActionAboveClient
                            updateActivePage = {this.props.updateActivePage}
                        />
                    </td>
                    <td><input type="checkbox"/></td>
                    <td><a href="#" onClick={this.props.getSingleClient.bind(this, allClientsList[i].id)}>{allClientsList[i].lastName} {allClientsList[i].firstName} {allClientsList[i].middleName}</a></td>
                    <td>{testMas[i][0]}</td>
                    <td>{testMas[i][1]}</td>
                    <td>{testMas[i][2]}</td>
                    <td>{testMas[i][3]}</td>
                    <td><StatusAbonements status={testMas[i][4]}/></td>
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
