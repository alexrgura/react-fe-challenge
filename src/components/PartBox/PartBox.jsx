import React, { useState } from 'react';

import './PartBox.css';

async function clickAction (part, quantity) {
    console.log('youve clicked me', part.part_file.file_name, quantity)
    const response = await fetch(`/parts/${part.id}`, {method: 'PUT', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quantity})}) 
}

const PartBox = ({part}) => {
    const [quantity, changeQuantity] = useState(part.quantity)
    return <div className={'part_container'} role="listitem">
        <div className={'part_name'}>{part.part_file.file_name}</div>

        <label className={'label'}> Quantity </label>
        <div className={'input_box'}>
        <input type="text" placeholder={quantity} onChange={(event) => changeQuantity(event.target.value)}/>
        <button onClick={() => clickAction(part, quantity)}> Change Quantity </button>
        </div>
    </div>
}

export default PartBox;