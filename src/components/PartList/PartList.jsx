import React from 'react';
import PartBox from '../PartBox';

const PartList = ({list}) => {
    return(
        <div role="list">
            {
                Array.isArray(list) 
                    ? list.map(part => <PartBox part={part} key={part.id}/>) 
                    : <div>No list array</div>
            }
        </div>)
}

export default PartList;