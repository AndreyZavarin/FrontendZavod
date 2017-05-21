import React ,{Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorizationAdmin from '../components/Authorization/AuthorizationAdmin'
import MainComponent from '../components/MainComponent'
import Clients from '../components/Clients/Clients'
import AddClient from '../components/Clients/AddClient'
import EditingClient from '../components/Clients/EditingClient'
import SingleClient from '../components/Clients/SingleClient'
import AddQuestionnaire from '../components/Clients/AddQuestionnaire '
import VisitWithoutRegistration from '../components/Clients/VisitWithoutRegistration'
import AddSubscriptions from '../components/Subscriptions/AddSubscriptions'
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

    addClient(values) {
        let mainBody = {
            "firstName":values.firstName,
            "lastName":values.lastName,
            "middleName": values.middleName,
            "gender":values.gender,
            "birthDate":values.birthDate,
            "subscriptions":[]
        }
        let sideBody = {
            "address": values.address,
            "phone": values.phone,
            "email": values.email,
        }
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
                    {activePage === 'singleClient' && <SingleClient
                        clientData = {clientData}
                        updateActivePage = {this.updateActivePage}
                    /> }
                    {activePage === 'addQuestionnaire' && <AddQuestionnaire
                        updateActivePage = {this.updateActivePage}
                    /> }
                    {activePage === 'addClient' && <AddClient
                        testss = {this.testss}
                        addClient={this.addClient}
                        updateActivePage = {this.updateActivePage}
                        onFieldChange = {this.onFieldChange}
                    /> }

                    {
                        activePage === 'addSubscriptions' && <AddSubscriptions
                            clientData = {clientData}
                        />
                    }


                    {activePage === 'editingClient' && <EditingClient
                        updateActivePage = {this.updateActivePage}
                    />}
                    {activePage === 'visitWithoutRegistration'&&<VisitWithoutRegistration
                        updateActivePage = {this.updateActivePage}
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