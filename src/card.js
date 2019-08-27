import React from 'react';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.defaultTitle = 'No title';
        this.currencySign = '$';
        this.defaultPrice = '0';
    }

    getPrice() {
        return this.currencySign + (this.props.item.price || this.defaultPrice);
    }

    render() {
        return(
            <div className='card'>
                <h5>
                    {this.props.item.title || this.defaultTitle}
                </h5>
                <h6>
                    {this.getPrice()}
                </h6>
            </div>
        );
    }
}