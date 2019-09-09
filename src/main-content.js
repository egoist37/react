import React from 'react';
import { Card } from './card';
import { CartElement } from './cart/cart-element';
import { Clock } from './clock';

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
        const fnsToBind = ['addToCart', 'handleClick', 'removeCard'];

        fnsToBind.forEach((fn) =>
            that[fn] = that[fn].bind(that));
            console.log('constructor...');
    }

    handleClick(key) {
        return this.goods[key];
    }

    componentDidMount() {
        console.log('componentDidMount...');
    }

    componentWillMount() {
        console.log('componentWillMmount...');
    }

    addToCart(item) {
        this.cart.push(item);
        const cart = this.cart;
        const totalAmount = this.cart
            .reduce((result, item) => {
                result += +item.price || 0;
                return result;
        }, 0);
        this.setState({
            totalAmount,
            cart,
        });
    }

    removeCard(index) {
        this.goods.splice(index, 1);
        const goods = [].concat(this.goods);
        this.setState({
            goods,
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
                        Go to cart
                        ({this.state.cart.length})
                    </button>
                    {
                        this.state.cart.map((el, key) => 
                            <CartElement key={key} item={el} />
                        )
                    }
            </div>
            );
        return content;
    }


    render () {
        console.log('render');
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
                        removeCard={this.removeCard}
                        fn={this.handleClick} />)}
                </div>

                <img src={this.img} alt={this.props.alt} title={this.props.title} />

                <Clock />

                content
            </div>
        );
    }
}