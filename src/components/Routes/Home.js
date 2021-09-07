import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { Spinner } from '../../globalStyle';
import { Hline, Container } from '../../globalStyle';
import { FetchNews } from '../../api/Api';
import {
    Firstpage,
    Secondpage,
    Thirdpage,
    Fourthpage
} from '../homepages';

export default function Homeclone() {
    const [indiannews, setIndiannews] = useState([]);
    const [worldnews, setWorldnews] = useState([]);
    const [businessnews, setBusinessnews] = useState([]);
    const [politicsnews, setPoliticsnews] = useState([]);
    const [loading, setLoading] = useState(false);

    /* eslint-disable */
    useEffect(() => {
        setLoading(true);
        let res1 = '';
        let res2 = '';
        let res3 = '';
        let res4 = '';
        const getnews1 = async () => { res1 = await FetchNews("india econnomy politics boolywood ") }
        const getnews2 = async () => {res2 = await FetchNews("World latest politics");}
        const getnews3 = async () => {res3 = await FetchNews("india business industry");}
        const getnews4 = async () => {res4 = await FetchNews("india politics");}
        getnews1().then(()=>setIndiannews(res1.data.value))
        getnews2().then(()=>setWorldnews(res2.data.value))
        getnews3().then(()=>setBusinessnews(res3.data.value))
        getnews4().then(()=>{
            setPoliticsnews(res4.data.value)
            setLoading(false)
        })     
    }, []);
    /* eslint-enable */
    return (
        <Container>
            {
                loading
                    ?   <Spinner>
                            <ClipLoader color='black' loading={loading} size={30} />
                        </Spinner>
                    : <>
                        {indiannews.length ? <Firstpage indiannews={indiannews} /> : ""}
                        {worldnews.length ? <Secondpage worldnews={worldnews} /> : ""}
                        {politicsnews.length ? <Thirdpage politicsnews={politicsnews} /> : ""}
                        {businessnews.length ? <Fourthpage businessnews={businessnews} /> : ""}
                        <Hline></Hline>
                      </>       
            }
        </Container>
    )
}

