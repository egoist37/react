import React from 'react';
import { Card } from './card';
import { Cart } from './cart';

export class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.img = 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        this.goods = [
            {
                title: 'iPhone Xs Max',
                price: 'Infinity',
                _id: 1
            },
            {
                title: 'Samsung XXX',
                price: '34567',
                _id: 2
            },
            {
                title: 'Xiomi Mi',
                _id: 3
            },
            {
                title: 'Пылесос',
                price: '5685',
                _id: 4
            },
            {
                price: '2348957',
                _id: 4
            }
        ];
        this.state = {
            cart: [],
        };
        this.cart = [];
        this.Name = 'Sam';
        setTimeout(function() {
            this.Name = 'opopop';
        }, 2000);
        this.cartElement = (<div>Nothing to buy</div>);
    //   this.show = this.show.bind(this);
      this.addToCart = this.addToCart.bind(this);
    }

    show(data) {
        console.log('test: ', data, this);
    //   this.goods[index].isActive = !this.goods[index].isActive;
    }

    addToCart(id) {
        this.cart.push(id);
        this.setState(Object.assign({}, this.state));
        // this.setState(Object.assign({}, this.state, {
        //     cart: this.cart
        // }));
    }

    renderCard(i) {
        return (
            <div onClick={() => this.handleClick(i)}>
                <Card
                    item={this.goods[i]}
                />
            </div>
        );
    }

    renderCart() {
        const content = (
            <div>
                {(
                <button type="submit" className="btn nav-btn-red">Go to cart({this.cart.length})</button>
                )}
            </div>
            )
        return content;
    }


    render () {
        return(
            <div className='wrapper'>
                {/* <Cart cart={this.state.cart} /> */}
                {this.cart.length ? this.renderCart() : (<div>Nothing in cart</div>)}
                <div className='content'>
                    {/* {this.renderCard(0)}
                    {this.renderCard(1)} */}
                    {this.goods.map((i, key) =>
                        <Card key={key} item={i} fn={this.show} addToCart={this.addToCart} />
                    )}
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <img src={this.img} alt={this.props.alt} title={this.props.title} />

                content
            </div>
        );
    }
}