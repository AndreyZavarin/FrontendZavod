import React, {PropTypes, Component } from 'react'

export default class Products extends Component {

    componentDidMount(){
        // this.props.getAllClientsList(this.props.token)
    }

    render() {
        const {allProductsList} = this.props.products
        let groupProducts = [];
        if(allProductsList) {
            let countgroupProducts = 1
            for(let item in allProductsList){
                console.log(item)
                const subgroupProducts = []

                if(Object.keys(allProductsList[item])){
                    for(let itemGroup in allProductsList[item]){
                        let products = []
                        if(allProductsList[item][itemGroup].length){
                            for (let i=0; i<allProductsList[item][itemGroup].length; i++){
                                const product = <li className="list-group-item">
                                    {allProductsList[item][itemGroup][i].product_name}
                                </li>
                               products.push(product)
                            }

                        }
                        console.log(itemGroup)
                        const subgroup = <div className="panel panel-default" style={{margin: '10px'}}>
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        {itemGroup}
                                    </a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse">
                                <ul className="list-group">
                                    { products}
                                </ul>
                            </div>
                        </div>
                        subgroupProducts.push(subgroup)
                    }
                }
                const product = <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse">
                                {item}
                            </a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse">
                        {subgroupProducts}
                    </div>
                </div>

                groupProducts.push(product)
                countgroupProducts++
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
                    <button style={{marginLeft: '10px'}} onClick={this.props.updateActivePage.bind(this, 'addProduct')} type="button" className="btn btn-success"><span className="glyphicon glyphicon-plus"></span> Добавить продукт</button>

                </form>
            </div>

            <div className="col-sm-12" style={{marginTop: '10px'}}>
                <div className="panel-group" id="accordion">
                    {groupProducts}
                </div>
            {/*<table className="table table-hover" style={{background: '#ffffff'}}>*/}
                {/*<thead>*/}
                {/*<tr>*/}
                    {/*<th></th>*/}
                    {/*<th><input type="checkbox"/></th>*/}
                    {/*<th>Название</th>*/}
                    {/*<th>Цена шт.</th>*/}
                    {/*<th>Количество</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}

                {/*</tbody>*/}
            {/*</table>*/}
            </div>
        </div>
    }
}

Products.propTypes = {

}
