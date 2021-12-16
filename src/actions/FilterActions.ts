import dispatcher from "../dispatcher/AppDispatcher";
import constants from "../constants/AppConstants";

function filterActions(filterBy: string): void {
	dispatcher.dispatch({
		actionTypes: constants.FILTER_BY,
		data: filterBy,
	});
}

export default filterActions;
