import React from 'react';
import Rod from './Rod'
import '../css/Board.css'

function Board(props) {

    return <div className="Board">
        <Rod />
        <Rod />
        <Rod />
    </div>;
}

export default Board;