import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';
import LeftNavBarMini from './NavBar/LeftNavBarMini'
import TopNabBar from './NavBar/TopNabBar'
import LeftNavBar from "./NavBar/LeftNavBar";
import Clients from "../Clients/Clients";

export default class MainComponent extends Component {

    componentDidMount(){
        // //this.props.createClient(this.props.token)
        // this.props.getSinsgleClient(1, this.props.token)
    }
    render() {
            return <div >
                <LeftNavBarMini/>
                <div className="container-fluid"  style={{ height: "100vh"}}>
                    <div className="row content">
                        <LeftNavBar/>
                            <TopNabBar/>
                            <div className="col-sm-10" style={{padding: "0"}}>
                                <Clients
                                    token = {this.props.token}
                                    clients = {this.props.clients}
                                    getAllClientsList = {this.props.getAllClientsList}
                                />
                            </div>
                    </div>
                </div>
            </div>
        }
}

MainComponent.propTypes = {

}
