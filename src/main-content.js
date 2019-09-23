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
                price: 'Infinity',
                id: '18362598165'
            },
            {
                title: 'Samsung XXX',
                price: '34567',
                id: '28394759823'
            },
            {
                title: 'Xiomi Mi',
                id: '2834759835'
            },
            {
                title: 'Пылесос',
                price: '5685',
                id: '237894598345'
            },
            {
                price: '2348957',
                id: '38942758923746'
            }
        ];
        this.cart = [];

        const goods = this.getStoredProducts() || this.goods;
        this.state = {
            totalAmount: 0,
            cart: [],
            filteredProduct: goods
        };
        this.searchValue = 'search smth';
        const that = this;
        const fnsToBind = [
            'addToCart',
            'handleClick',
            'removeCard',
            'searchChange'];

        fnsToBind.forEach((fn) =>
            that[fn] = that[fn].bind(that));
            console.log('constructor...');
    }

    setProductsState(products) {
        const productsString = JSON.stringify(products);
        localStorage.setItem('products', productsString);
    }

    /*
     * @params {Object}
     * {
     *      id: string
     *      price: string } number
     * }
     */
    handleClick(params) {
        const goods = this.goods.map(product => {
            if (product.id === params.id) {
                product.price = params.price;
            }
            return product;
        });
        this.setState({
            goods,
        });
        this.setProductsState(goods);
    }

    getStoredProducts() {
        return  JSON.parse(localStorage.getItem('products'));
    }

    componentDidMount() {
        const goods = this.getStoredProducts();
        if (!goods) {
            this.setProductsState(this.goods);
        }
        this.goods = goods;
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

    searchChange(e) {
        const searchValue = e.target.value;

        const filteredProduct = this.goods
                    .filter(product =>
                        product.title && product.title.match(new RegExp(searchValue, 'gi')));
        this.setState({
            filteredProduct
        });
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
        return(
            <div className='wrapper'>
                {this.cart.length ? this.renderCart() : (<div>empty cart, add something</div>)}

                <input type="text"
                    value={this.state.searchValue} 
                    onChange={this.searchChange} />

                <div className='content'>
                    {this.state.filteredProduct.map((item, key) =>
                    <Card
                        item={item}
                        id={key}
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