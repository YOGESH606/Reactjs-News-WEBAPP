import React from 'react'
import News from '../News'
export default function Sports() {
    console.log("from sport");
    return (
        <div>
            <News query={"cricket"} />
        </div>
    )
}
