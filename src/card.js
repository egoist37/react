import React from 'react';
import { Link } from 'react-router-dom';
import { Base } from './base-class';

export class Card extends Base {
    constructor(props) {
        super(props);
        this.props = props;
        this.defaultTitle = 'No title';
        this.currencySign = '$';
        this.defaultPrice = '0';
        this.price = this.getPrice();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
        this.remove = this.remove.bind(this);
    }

    getTitle() {
        return (this.props && this.props.item.title) || this.defaultTitle;
    }

    getPrice() {
        return this.currencySign + (this.props.item.price || this.defaultPrice);
    }

    setPrice(price) {
        this.price = this.currencySign + price;
    }

    getClassName () {
        return this.state && this.state.isActive
            ? 'card active'
            : 'card';
    }

    onClickHandler(event) {
        this.setState({
            isActive: !this.state ? true : !this.state.isActive,
        });
        const price = Math.round((Math.random() * 100)).toFixed(2);
        this.setPrice(price);
        this.props.fn({
            id: this.props.item.id,
            price
        });
    }

    handleClickAddToCart(event) {
        event.stopPropagation();
        this.props.addToCart({
            title: this.props.item.title,
            price: this.price.slice(1)
        });
    }

    remove(event) {
        event.stopPropagation();

        this.props.removeCard(this.props.k);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount...');
    }

    stopPropagation(event) {
        event.stopPropagation();
    }

    render() {
        return(
            <div className={ this.getClassName() }
                 onClick={this.onClickHandler}>
                <h5>
                    {this.getTitle()}
                </h5>
                <h6>
                    {this.price}
                </h6>
                <button onClick={this.handleClickAddToCart}>buy</button>
                <button onClick={this.remove}>remove</button>
                <Link to={{
                    pathname: `/product/${this.props.item.id}`,
                    state: {
                        price: this.price,
                        title: this.getTitle()
                    }
                }}
                      onClick={this.stopPropagation }>
                    show details
                </Link>
            </div>
        );
    }
}