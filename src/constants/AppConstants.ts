interface Constants{
    API_URL: string
    API_KEY: string
    MAX_RESULT: number
    SEARCH_KEYWORD: string
    LIST: string
    COUNT: string
    FILTER_BY: string
}

const constants:Constants = {
    API_URL: "https://www.googleapis.com/youtube/v3/search",
    // API_KEY: "AIzaSyBmULSnzOlL9i9cN1bEVk9iAtHlMVPQKW8",
    // API_KEY: "AIzaSyA73gieywj-JHTb-5upvvEnSAwh8Ob8dNc",
    API_KEY: "AIzaSyCS1yBza5l34_ONn1_wfeA-3Rdrnd5OtxM",
    MAX_RESULT: 15,
    SEARCH_KEYWORD : "SEARCH_KEYWORD",
    LIST: "LIST",
    COUNT: "COUNT",
    FILTER_BY: "FILTER_BY"
}

export default constants;