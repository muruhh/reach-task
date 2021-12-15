import { EventEmitter } from "events";
import dispatcher from "../dispatcher/AppDispatcher";
import constants from "../constants/AppConstants";


const CHANGE_EVENT = "change";
let _search_keyword = "";
let _list:any = [];
let _count: number;

class Store extends EventEmitter{
    addChangeListener(callback: any) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback: any) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getSearchResult():string {
        return _search_keyword;
    }

    getList(){
        return _list;
    }
    
    getCount():number {
        return _count;
    }
}

const store = new Store();

dispatcher.register((payload: any) => {
    switch (payload.actionTypes) {
        case constants.SEARCH_KEYWORD:
            _search_keyword = payload.data;
            store.emitChange();
            break;
        case constants.LIST:
            _list = payload.data;
            store.emitChange();
            break;
        case constants.COUNT:
            _count = payload.data;
            store.emitChange();
            break;
        default:
    }
});

export default store;