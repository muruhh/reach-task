import dispatcher from "../dispatcher/AppDispatcher";
import constants from "../constants/AppConstants";
import axios from "axios";

function searchAction(search: string):void|boolean{    
    if(search.trim() == "") return false;

    dispatcher.dispatch({
        actionTypes: constants.SEARCH_KEYWORD,
        data: search,
    })

    axios.get(`${constants.API_URL}?part=snippet&q=${search}&key=${constants.API_KEY}&maxResults=${constants.MAX_RESULT}`)
    .then(( { data }) => {
        
        const { items, pageInfo } = data;

        dispatcher.dispatch({
            actionTypes: constants.LIST,
            data: items,
        })
        
        dispatcher.dispatch({
            actionTypes: constants.COUNT,
            data: pageInfo.totalResults,
        })
    })
    .catch((error:any) => {
        throw new Error(error);
    })
}

export default searchAction;