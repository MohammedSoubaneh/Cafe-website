import React from 'react';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";


import { Component } from 'react';
import UserService from '../../services/user.service';


const required = (value) => {
    if (!value) {
        return (
            <div role='alert'>This field is required!</div>
        );
    }
};


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);

        this.state = {
            addName: [],
            addPrice: [],
            addDescription: [],
            addWeight: [],
        }
    }
    componentDidMount() {
        UserService.productList().then(
            data => {
                const productName = []
                const productDescription = []
                const productPrice = []
                const productWeight = []
                const currList = data.data.products
                console.log(currList)
                for (let i = 0; i < currList.length; i++) {
                    // console.log(currList[i])
                    productName.push(currList[i].name)
                    productDescription.push(currList[i].description)
                    productPrice.push(currList[i].price)
                    productWeight.push(currList[i].weight)
                }
                console.log(productWeight)
                this.setState({
                    addName: productName,
                    addPrice: productPrice,
                    addDescription: productDescription,
                    addWeight: productWeight,
                })
                
            }
        )
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value,
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        })
    }

    onChangeWeight(e) {
        this.setState({
            weight: e.target.value,
        })
    }

    handleSumbit(e) {
        e.preventDefault();
        return console.log(this.state)
        this.setState({
            loading: true,
        })

        this.form.validateAll();


        if (this.checkBtn.context._errors.length === 0) {
            UserService.addProductList().then(() => {
                window.location.reload();
            })
            .catch(() => {
                this.setState({
                    loading: false
                });
            });
        } else {
            this.setState({
                loading: false,
            });
        }
    }







    render() {
        return(
            <div>
            <div className='dashboardGrid'>
            <div>Name: {this.state.addName.map((addNames, index) => { 
                return <li key={index}>{addNames}</li>} )}</div>

            <div>Price{this.state.addPrice.map((addPrices, index) => {
                return <li>{addPrices}</li>
            })}</div>

            <div>Description{this.state.addDescription.map((addDescriptions, index) => {
                return <li>{addDescriptions}</li>
            })}</div>

            <div>Weight{this.state.addWeight.map((addWeights, index) => {
                return <li>{addWeights}</li>
            })}</div>

            </div>
            </div>
        )
    }
}
// products: data.data.products
export default Dashboard;