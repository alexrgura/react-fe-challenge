import React from 'react';
import PartBox from '../PartBox';
//import styles from './PartList.scss';

const PartList = ({list}) => {
    //console.log(list, Array.isArray(list))
    return <div role="list">{Array.isArray(list) ? list.map(part => <PartBox part={part} key={part.id}/>) : <div>No list array</div>}</div>
}

export default PartList;