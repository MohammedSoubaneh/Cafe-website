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


class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);

        this.state = {
            name: '',
            price: 1,
            description: '',
            weight: 1,
        }
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

        this.form.validateAll();

        const updatedName = this.state.name
        const updatedPrice = this.state.price
        const updatedDesc = this.state.description
        const updatedWeight = this.state.weight

        const { history } = this.props


        if (this.checkBtn.context._errors.length === 0) {
            UserService.addProductList(
                updatedName,
                updatedPrice, 
                updatedDesc, 
                updatedWeight)
                .then(() => {
                history.push('/dashboard');
                window.location.reload();
            })
            .catch(() => {
                console.log('fail')
            });
        } else {
            console.log('fail')
        }
    }







    render() {
        return(
            <div>
            <Form className='outerContainer'
            onSubmit={this.handleSumbit}
            id='form'
            ref={(c) => {
              this.form = c;
            }}
            >
                <div className='innerContainer'>
            <h1>Login</h1>
            <div className="form-group">
              <label className='labels' htmlFor="username">Name</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.name}
                onChange={this.onChangeName}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label className='labels' htmlFor="password">Price</label>
              <Input
                parse={value => Number(value)}
                type="number"
                className="form-control"
                name="password"
                value={this.state.price}
                onChange={this.onChangePrice}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label className='labels' htmlFor="password">Description</label>
              <Input
                type="text"
                className="form-control"
                name="password"
                value={this.state.description}
                onChange={this.onChangeDescription}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label className='labels' htmlFor="password">Weight</label>
              <Input
                type="number"
                className="form-control"
                name="password"
                value={this.state.weight}
                onChange={this.onChangeWeight}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                onClick={this.handleSumbit}
                className="button"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Submit</span>
              </button>
            </div>
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
            </div>
                </Form>
            </div>
        )
    }
}
// products: data.data.products
export default AddProduct;