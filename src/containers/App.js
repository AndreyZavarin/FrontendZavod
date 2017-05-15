import React ,{Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorizationAdmin from '../components/AuthorizationAdmin'
import MainComponent from '../components/MainComponent'
import Clients from '../components/Clients/Clients'
import AddClient from '../components/Clients/AddClient'
import EditingClient from '../components/Clients/EditingClient'
import SingleClient from '../components/Clients/SingleClient'
import AddQuestionnaire from '../components/Clients/AddQuestionnaire '
import * as pageActions from '../actions/index'

import '../style/appStyle.css'

class App extends Component  {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            gender: '',
            birthDate:[],
            address: '',
            phone: '',
            email: '',
            subscriptions:[]
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
        this.addClient = this.addClient.bind(this)
        this.updateActivePage = this.updateActivePage.bind(this)
    }

    onFieldChange(fieldName, e){
        const value = e.target.value.trim()
        this.setState({[''+fieldName]: value})
    }

    onHandleSubmit(event){
        event.preventDefault()
        console.log(">>>>>>>>>>>>>>>>>>>>..")
        //if(this.state.login && this.state.password){
        this.props.pageActions.authorizationAdmin('admin','password')
    }

    addClient(event) {
        event.preventDefault()
            // "birthDate":[2002,6,23],
        let mainBody = {
            "firstName": this.state.firstName,
            "lastName":this.state.lastName,
            "middleName":this.state.middleName,
            "gender":this.state.gender,
            "birthDate":this.state.birthDate?this.state.birthDate.split('-'):'',
            "subscriptions":[]
        }
        let sideBody = {
            "address": this.state.address,
            "phone": this.state.phone,
            "email": this.state.email,
        }
        console.log(mainBody)
        console.log(sideBody)
        this.props.pageActions.addClient(mainBody)
    }

    updateActivePage(newPage){
        this.props.pageActions.updateActivePage(newPage)
    }

    render(){
        const {allClientsList, clientData} = this.props.clients
        const {activePage} = this.props.router

        if(this.props.authorization.authorization){
            return <div>
                <MainComponent
                    getAllClientsList = {this.props.pageActions.getAllClientsList}
                    addClient = {this.props.pageActions.addClient}
                    getSingleClient = {this.props.pageActions.getSingleClient}
                    token = {this.props.authorization.token}
                    clients = {this.props.clients}
                    updateActivePage = {this.updateActivePage}
                >
                    {/*<button onClick={this.updateActivePage.bind(this,'addClient')}>ddd</button>*/}

                    {activePage === 'clients' && <Clients
                        token = {this.props.authorization.token}
                        clients = {this.props.clients}
                        getAllClientsList = {this.props.pageActions.getAllClientsList}
                        getSingleClient = {this.props.pageActions.getSingleClient}
                        updateActivePage = {this.updateActivePage}
                    />}
                    {activePage === 'singleClient' && <SingleClient clientData = {clientData}/> }
                    {activePage === 'addQuestionnaire' && <AddQuestionnaire/> }
                    {activePage === 'addClient' && <AddClient
                        addClient={this.addClient}
                        updateActivePage = {this.updateActivePage}
                        onFieldChange = {this.onFieldChange}
                    /> }
                    {activePage === 'editingClient' && <EditingClient
                    />}
                </MainComponent>
            </div>
        }
        else {
            return <div>
                <AuthorizationAdmin
                    onFieldChange = {this.onFieldChange}
                    onHandleSubmit = {this.onHandleSubmit}
                />
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        authorization: state.authorization,
        clients: state.clients,
        router: state.router
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)