import dispatcher from "../dispatcher/AppDispatcher";
import constants from "../constants/AppConstants";

function loadingAction(loading: boolean): void {
	dispatcher.dispatch({
		actionTypes: constants.DISPLAY_LOADING,
		data: loading,
	});
}

export default loadingAction;
