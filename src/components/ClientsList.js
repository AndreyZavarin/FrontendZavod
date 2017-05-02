import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';


export default class ClientsList extends Component {

    componentDidMount(){
        this.props.getAllClientsList(this.props.token)
        //this.props.createClient(this.props.token)
        this.props.getSingleClient(1, this.props.token)

    }

    render() {
            return <div className="container">
            </div>
        }
}

ClientsList.propTypes = {

}
