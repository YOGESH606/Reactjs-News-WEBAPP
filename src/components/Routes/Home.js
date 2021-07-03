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

        const getnews = async () => {
            setLoading(true);
            const res1 = await FetchNews("india econnomy politics boolywood ");
            const res2 = await FetchNews("World politics");
            const res3 = await FetchNews("india business industry");
            const res4 = await FetchNews("india politics");
            setIndiannews(res1.data.value);
            setWorldnews(res2.data.value);
            setBusinessnews(res3.data.value);
            setPoliticsnews(res4.data.value);

            setLoading(false);
        }
        getnews();


         return () => {
             setIndiannews([]);
             setWorldnews([]);
             setBusinessnews([]);
             setPoliticsnews([]);
         }

    }, []);

    /* eslint-enable */

    // console.log('indiannews', indiannews);
    // console.log('worldnes', worldnews);
    // console.log('politicsnews', politicsnews);
    // console.log('businessnews', businessnews);
    return (
        <Container>
            {
                loading
                    ?
                    <Spinner>
                        <ClipLoader color='black' loading={loading} size={80} />
                    </Spinner>
                    :
                    <>
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

