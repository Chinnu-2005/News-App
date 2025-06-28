export async function getHeadlines(page=1,category="general"){
    const pageSize=12;
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=7792a46221fb49b4a357990600b75ad3`);
    const data=await res.json()
    return {
    articles:data.articles || [],
    totalResults:data.totalResults || 0
    };
}