import React from 'react';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.value = props;
        this.defaultTitle = 'No title';
        this.currencySign = '$';
        this.defaultPrice = '0';
        this.price = this.getPrice();
        this.handleClick = this.handleClick.bind(this);
    }

    getPrice() {
        return this.currencySign + (this.value.item.price || this.defaultPrice);
    }

    setPrice(price) {
        this.price = this.currencySign + (price || this.defaultPrice);
    }

    getTitle() {
        return this.value ? this.value.item.title : this.defaultTitle;
    }

    handleClick (event) {
        this.props.fn(event.currentTarget.dataset);
        // console.log('event: ', event.currentTarget);
        console.log('data: ', event.currentTarget.dataset);
        this.setState({
            isActive: !this.state ? true : !this.state.isActive,
        });
        this.setPrice((Math.random() * 1000).toFixed(2));
    }

    getClassName () {
        return this.state && this.state.isActive
            ? 'card active'
            : 'card';
    }

    add (e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.addToCart(this.value.item._id);
    }

    render() {
        return(
            <div className={ this.getClassName() }
                data-test='123'
                onClick={ (e) => this.handleClick(e) }>
                <h5>
                    { this.getTitle() }
                </h5>
                <h6>
                    { this.price }
                </h6>
                <button onClick={e =>this.add(e)}>Add to cart</button>
            </div>
        );
    }
}