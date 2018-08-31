import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        },
        this.board = [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]
            ],
        this.turn = 0;
        console.log(this.board);
    }

    handleColClick(e) {
        let img = document.createElement('img');
        if (this.turn % 2 === 0) {
            img.setAttribute('src', "https://cdn.shopify.com/s/files/1/2209/1449/products/20171013_151812_5878323e-15ab-4608-b4ee-a8a55a38b16d_360x.jpg?v=1535645526")
            img.setAttribute('className', 'image')
            img.setAttribute('height', '90px');
            img.setAttribute('width', '90px');
        } else {
            img.setAttribute('src', "https://cdn.shopify.com/s/files/1/2209/1449/products/20171013_151949_70dce715-064c-4b07-b0b6-7f3b99cb84e2_360x.jpg?v=1535641804")
            img.setAttribute('className', 'image')
            img.setAttribute('height', '90px');
            img.setAttribute('width', '90px');
        }

        let colindex = e.colindex;
        for (var i = 0; i< this.board.length; i++) {
            if (this.board[this.board.length-1][colindex] === 0) {
                this.board[this.board.length-1][colindex] === 1;
                e.appendChild(img);
            } else if (this.board[i][colindex] === 1) {
                this.board[i-1][colindex] == 1;
                e.appendChild(img);
            }
        }
        e.appendChild(img);
        this.turn += 1;
    }

    render() {
        return (
            <Board board={this.board} handleColClick={this.handleColClick.bind(this)}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
