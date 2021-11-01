import React, { useState, useEffect } from 'react';
import ButtonBar from '../ButtonBar';
import PartList from '../PartList';
import './Page.css';

const pageChanger = (page, changePage, headers) => (num, arrow) => {
    if(num){
        changePage(num)
    }
    else if(arrow === '+' && page < headers['total-pages']){
        changePage(page + 1)
    }
    else if(arrow === '-' && page > 1){
        changePage(page - 1)
    }
}

async function fetchData(page, changeData, setHeaders){
    const response = await fetch(`/parts/?page=${page}`)
    response.headers.forEach((value, name) => setHeaders((headers) => ({...headers, [name]: value})))
    const body = await response.json()
    changeData(body.data)
}

const Page = () => {
    const [headers, setHeaders] = useState({'total-pages' : 1});
    const [page, changePage] = useState(1);
    const clickFunction = pageChanger(page, changePage, headers);
    const [data, changeData] = useState(null);

    useEffect(() => {
        fetchData(page, changeData, setHeaders)
    }, [page, changeData])

    return (
        <div className={'container'}>
            <div className={'header'}>
                Part Selection Screen
            </div>
        <div>
          <PartList list = {data} />
        </div>
            <ButtonBar pages={headers['total-pages']} clickFunction={clickFunction} page={page} />
        </div>
      );
}

export default Page;