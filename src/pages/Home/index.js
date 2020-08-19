import React from 'react';

import Board from '../../components/Board';

import './styles.css';

function Home() {
    return (
        <div className="container">
            <div className="title">
                <h2>Tic Tac Toe</h2>
            </div>
            
            <Board />
        </div>
    );
}

export default Home;