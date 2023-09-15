import React, { useCallback, useState } from 'react'
import SiteNav from "../layout/SiteNav"
import CallBtn from './CallBtn';

export default function CallBackExplain() {
    let [counter, setCounter] = useState(0);

    let handleCounter = () => {
        setCounter(counter => counter + 1)
    }

    let handleCounterCallback = useCallback(handleCounter, [])
    return (
        <div className='text-center'>
            <SiteNav />
            <div className='mainContent'>
                <h2>Call Back</h2>
                <h3>{counter}</h3>
                <CallBtn clickEvent={handleCounterCallback} >Add</CallBtn>
            </div>
        </div>
    )
}
