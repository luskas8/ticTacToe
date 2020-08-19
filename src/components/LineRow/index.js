import React from 'react';

import './styles.css';
import Cell from '../Cell';

function LineRow(props) {
    return (
        <div className="board-line">
            <Cell value={props.cells[0]} click={props.btnClick} />
            <Cell value={props.cells[1]} click={props.btnClick} />
            <Cell value={props.cells[2]} click={props.btnClick} />
        </div>
    );
}

export default LineRow;