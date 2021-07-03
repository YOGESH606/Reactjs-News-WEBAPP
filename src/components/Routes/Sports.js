import React from 'react'
import News from '../news/News/News';
export default function Sports() {
    console.log("from sport");
    return (
        <div>
            <News query={"india sport"} />
        </div>
    )
}
