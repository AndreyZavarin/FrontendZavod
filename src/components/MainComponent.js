import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';
import LeftNavBarMini from './Navigation/NavBar/LeftNavBarMini'
import TopNabBar from './Navigation/NavBar/TopNabBar'
import LeftNavBar from "./Navigation/NavBar/LeftNavBar";
import Clients from "./Clients/Clients";
import AddClient from "./Clients/AddClient";

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
                        <LeftNavBar
                            updateActivePage = {this.props.updateActivePage} />
                            <TopNabBar
                                updateActivePage = {this.props.updateActivePage}
                            />
                            <div className="col-sm-10" style={{padding: "0"}}>

                                {/*<Clients*/}
                                    {/*token = {this.props.token}*/}
                                    {/*clients = {this.props.clients}*/}
                                    {/*getAllClientsList = {this.props.getAllClientsList}*/}
                                {/*/>*/}

                                {this.props.children}

                                {/*<AddClient/>*/}
                            </div>
                    </div>
                </div>
            </div>
        }
}

MainComponent.propTypes = {

}
