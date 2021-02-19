import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Criação do componente Game
function Game() {
    return <div>Jogo</div>
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
