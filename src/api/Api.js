import axios from 'axios'


export const FetchNews = (query) => {


    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`
    return (axios.get(url, {
        headers: {
            'x-rapidapi-key': 'e441dc3763mshb311bff847e17edp10494cjsnd68579dd6ad6',
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }))
}


