import dispatcher from "../dispatcher/AppDispatcher";
import constants from "../constants/AppConstants";
// import axios from "axios";

import dump from "../dump.json";

function searchAction(search: string):void|boolean{    
    if(search.trim() == "") return false;

    const list = dump.items;

    dispatcher.dispatch({
        actionTypes: constants.SEARCH_KEYWORD,
        data: search,
    })

    dispatcher.dispatch({
        actionTypes: constants.LIST,
        data: list,
    })
    
    dispatcher.dispatch({
        actionTypes: constants.COUNT,
        data: 1,
    })

    /* axios.get(`${constants.API_URL}?part=snippet&q=${search}&key=${constants.API_KEY}&maxResults=${constants.MAX_RESULT}`)
    .then((response) => {
        dispatcher.dispatch({
            actionTypes: constants.SEARCH_KEYWORD,
            data: response,
        })
    })
    .catch((error) => {
        // throw new Error(error);
    }) */
}

export default searchAction;