import React from 'react';
import './ButtonBar.css';

const ButtonBar = ({pages, clickFunction, page}) => {
    const totalPages = Number(pages);
    return (
    <div className={'button_container'}>{Array.from({length: totalPages+2}, (x, i) => {
        if(i === 0){
            return <button key={i} role="button" className={`button end_buttons ${page<2 ? 'disabled' : 'enabled'}`} onClick = {() => clickFunction(undefined , '-')} disabled={page<2}> {'← Prev'} </button>
        }
        else if(i === totalPages+1){
            return <button key={i}  role="button"  className={`button end_buttons ${page===totalPages ? 'disabled' : 'enabled'}`} onClick = {() => clickFunction(undefined, '+')} disabled={page===totalPages}>{'Next →'}</button>
        }
        else if(i < totalPages+1){
            return <button key={i}  role="button"  onClick = {() => clickFunction(i)} className={`button enabled ${page===i ? 'selected' : 'unselected'}`}>{i}</button> 
        }
    })}
    </div>)
};

export default ButtonBar