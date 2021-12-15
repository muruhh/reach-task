import { EventEmitter } from "events";
import dispatcher from "../dispatcher/AppDispatcher";
import constants from "../constants/AppConstants";


const CHANGE_EVENT = "change";
let _search_keyword = "";
let _list:any = [];
let _count: number;
let _filter_by = "all";

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
        if(_filter_by && _filter_by != "all"){
            return _list.filter((m:any) => m.id.kind === _filter_by);
        }

        return _list;
    }
    
    getCount():number {
        return _count;
    }

    getFilterBy():string {
        return _filter_by;
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
        case constants.FILTER_BY:
            _filter_by = payload.data;
            store.emitChange();
            break;
        default:
    }
});

export default store;