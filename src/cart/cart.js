import React from 'react';

export class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='cart'>
                {<h5>
                    { this.props.cart.length }
                </h5>}
                {/* <button onClick={e =>this.add(e)}>Go to cart</button> */}
            </div>
        );
    }
}