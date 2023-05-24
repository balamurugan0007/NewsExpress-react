




//api key 
export const API_KEY='403e939800a7478f897b03f8cb6a60c8'





//const news_channel=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`

//country wise
 //const country=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`


 //every thing
  
  

  export default {
    Article: `https://newsapi.org/v2/everything?q=Apple&from=2023-05-21&sortBy=popularity&apiKey=${API_KEY}`,
    Trending:`https://newsapi.org/v2/everything?q=$braeking&apiKey=${API_KEY}`,
    latest:`https://newsapi.org/v2/everything?q=$latest&apiKey=${API_KEY}`,
    entertainment:`https://newsapi.org/v2/everything?q=$entertainment&apiKey=${API_KEY}`,
    general:`https://newsapi.org/v2/everything?q=$general&apiKey=${API_KEY}`,
    science:`https://newsapi.org/v2/everything?q=$science&apiKey=${API_KEY}`,
    technology:`https://newsapi.org/v2/everything?q=$technology&apiKey=${API_KEY}`,
    sports:`https://newsapi.org/v2/everything?q=$sports&apiKey=${API_KEY}`,
    health:`https://newsapi.org/v2/everything?q=$health&apiKey=${API_KEY}`,
    games:`https://newsapi.org/v2/everything?q=$games&apiKey=${API_KEY}`,
    movies:`https://newsapi.org/v2/everything?q=$movies&apiKey=${API_KEY}`,
  };