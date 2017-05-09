import React ,{Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorizationAdmin from '../components/AuthorizationAdmin'
import MainComponent from '../components/MainComponent'
import * as pageActions from '../actions/index'

import '../style/appStyle.css'

class App extends Component  {
    constructor(props){
        super(props)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
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

    render(){
        if(this.props.authorization.authorization){
            return <div>
                <MainComponent
                    getAllClientsList = {this.props.pageActions.getAllClientsList}
                    addClient = {this.props.pageActions.addClient}
                    getSingleClient = {this.props.pageActions.getSingleClient}
                    token = {this.props.authorization.token}
                    clients = {this.props.clients}
                />
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
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)