import React, {PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom';
import LeftNavBarMini from './NavBar/LeftNavBarMini'
import TopNabBar from './NavBar/TopNabBar'
import LeftNavBar from "./NavBar/LeftNavBar";

export default class MainComponent extends Component {

    componentDidMount(){
        // this.props.getAllClientsList(this.props.token)
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
                            <div className="col-sm-9">
                                {/*<div className="row">*/}
                                    {/*<div className="col-sm-3">*/}
                                        {/*<div className="well">*/}
                                            {/*<h4>Users</h4>*/}
                                            {/*<p>1 Million</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-3">*/}
                                        {/*<div className="well">*/}
                                            {/*<h4>Pages</h4>*/}
                                            {/*<p>100 Million</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-3">*/}
                                        {/*<div className="well">*/}
                                            {/*<h4>Sessions</h4>*/}
                                            {/*<p>10 Million</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-3">*/}
                                        {/*<div className="well">*/}
                                            {/*<h4>Bounce</h4>*/}
                                            {/*<p>30%</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="row">*/}
                                    {/*<div className="col-sm-4">*/}
                                        {/*<div className="well">*/}
                                            {/*<p>Text</p>*/}
                                            {/*<p>Text</p>*/}
                                            {/*<p>Text</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-4">*/}
                                        {/*<div className="well">*/}
                                            {/*<p>Text</p>*/}
                                            {/*<p>Text</p>*/}
                                            {/*<p>Text</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-4">*/}
                                        {/*<div className="well">*/}
                                            {/*<p>Text</p>*/}
                                            {/*<p>Text</p>*/}
                                            {/*<p>Text</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="row">*/}
                                    {/*<div className="col-sm-8">*/}
                                        {/*<div className="well">*/}
                                            {/*<p>Text</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-4">*/}
                                        {/*<div className="well">*/}
                                            {/*<p>Text</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                    </div>
                </div>
            </div>
        }
}

MainComponent.propTypes = {

}
