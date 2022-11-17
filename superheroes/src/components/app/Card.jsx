import React from 'react';

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.url} alt={props.name} />
            <div>Вселенная: {props.universe}</div>
            <div>Альтер-эго: {props.alterEgo}</div>
            <div>Род деятельности: {props.occupation}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсилы: {props.powers}</div>
            <div>{props.details}</div>
        </div>
    )
}

export default Card