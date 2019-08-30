import React from 'react';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.defaultTitle = 'No title';
        this.currencySign = '$';
        this.defaultPrice = '0';
        this.price = this.getPrice();
        this.onClickHandler = this.onClickHandler.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    getTitle() {
        return this.value ? this.value.item.title : this.defaultTitle;
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
        const item = this.props.fn(this.props.k);
        console.log("item: ", item);
    }

    addToCart(event) {
        event.stopPropagation();
        // this.props.addToCart(this.props.item);
        this.props.addToCart({
            title: this.props.item.title,
            price: this.price.slice(1)
        });
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
                <button onClick={this.addToCart}>buy</button>
            </div>
        );
    }
}