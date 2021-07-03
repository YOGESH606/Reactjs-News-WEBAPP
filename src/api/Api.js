import axios from 'axios'


export const FetchNews = (query) => {
 
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`
    return (
        axios.get(url, {
        headers: {
                'x-rapidapi-key': `${API_KEY}`,
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }))
}


