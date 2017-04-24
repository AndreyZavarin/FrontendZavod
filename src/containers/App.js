import React ,{Component, PropTypes} from 'react'
import AuthorizationAdmin from '../components/AuthorizationAdmin'
import {authorizationAdmin} from '../actions/index'


import { connect } from 'react-redux'

import '../css/appStyle.css'

class App extends Component  {
    constructor(props){
        super(props)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
        this.state = {
            login: null,
            password: null
        }
    }

    onFieldChange(fieldName, e){
        const value = e.target.value.trim()
        this.setState({[''+fieldName]: value})
    }

    onHandleSubmit(event){
        event.preventDefault()
        console.log(">>>>>>>>>>>>>>>>>>>>..")
        //if(this.state.login && this.state.password){
        this.props.dispatch(authorizationAdmin(this.state.login, this.state.password))

        //}
    }

    render(){
        return <div>
            <AuthorizationAdmin
                onFieldChange = {this.onFieldChange}
                onHandleSubmit = {this.onHandleSubmit}
            />
        </div>
    }
}
App.propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.any,
}

const mapStateToProps = (state) => {
    return {
        authorization: state.authorization
        //dataLoanUsers: state.dataLoanUsers,
    }
}

export default connect(
    mapStateToProps
)(App)