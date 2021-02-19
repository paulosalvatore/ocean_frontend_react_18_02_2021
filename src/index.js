import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Board() {
    return <div>Board</div>
}

// Criação do componente Game
function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>

            <div className="game-info">
                Info
            </div>
        </div>
    );
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
