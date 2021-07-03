import React from 'react';
import News from '../news/News/News';
export default function Searchnews(props) {
    const query = props.location.state.query;
    return (
        <>
            <News query={query} />
        </>
    )
}
