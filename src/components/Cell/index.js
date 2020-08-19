import React from 'react';

import './styles.css';

function Cell(props) {
    return (
        <div className="board-cell">
            <button onClick={props.click}>{props.value}</button>
        </div>
    );
}

export default Cell;