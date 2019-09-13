import React from 'react';
import { Base } from '../base-class';

export class CartResult extends Base {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='cart-result__wrapper--empty'>
                <h1 className='--center'>Cart</h1>
            </div>
        );
    }
}