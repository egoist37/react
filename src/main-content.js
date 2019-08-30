import React from 'react';
import { Card } from './card';

export class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.img = 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        this.goods = [
            {
                title: 'iPhone Xs Max',
                price: 'Infinity'
            },
            {
                title: 'Samsung XXX',
                price: '34567'
            },
            {
                title: 'Xiomi Mi',
            },
            {
                title: 'Пылесос',
                price: '5685'
            },
            {
                price: '2348957'
            }
        ];
        this.cart = [];
        this.state = {
            totalAmount: 0,
            cart: []
        };
        const that = this;
        const fnsToBind = ['addToCart', 'handleClick'];

        fnsToBind.forEach((fn) =>
            that[fn] = that[fn].bind(that));
    }

    handleClick(key) {
        return this.goods[key];
    }

    addToCart(item) {
        this.cart.push(item);
        const totalAmount = this.cart
            .reduce((result, item) => {
                result += +item.price || 0;
                return result;
        }, 0);
        this.setState({
            totalAmount,
            cart: this.cart,
        });
    }

    getTotalAmount() {
        return this.state.totalAmount;
    }

    renderCart() {
        const content = (
            <div>
                    <strong>Full price: {this.getTotalAmount()}</strong>
                    <button type="submit"
                        className="cart-btn">
                        Go to cart({this.state.cart.length})
                    </button>
            </div>
            );
        return content;
    }


    render () {
        return(
            <div className='wrapper'>
                {this.cart.length ? this.renderCart() : (<div>empty cart, add something</div>)}
                <div className='content'>
                    {this.goods.map((item, key) =>
                    <Card
                        item={item}
                        k={key}
                        key={key}
                        addToCart={this.addToCart}
                        fn={this.handleClick} />)}
                </div>
                '
                <img src={this.img} alt={this.props.alt} title={this.props.title} />

                content
            </div>
        );
    }
}