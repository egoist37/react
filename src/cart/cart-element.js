import React from 'react';
import { Base } from '../base-class';

export class CartElement extends Base {
    constructor(props) {
        super(props);
        this.item = this.props.item;
    }

    render() {
        return (
            <div className='cart-element'>
                {this.item.title} <mark>{this.item.price}</mark>
            </div>
        );
    }
}