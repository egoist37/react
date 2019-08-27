import React from 'react';
import { Card } from './card';

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
    }
    handleClick(index) {
        console.log(index);
    }


    render () {
        return(
            <div className='wrapper'>
                <div className='content'>
                    {this.goods.map(i => <Card item={i} onClick={() => this.handleClick(i)} />)}
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
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