// LIBRARY
import { createStore } from "redux";
import { createBrowserHistory } from "history";

// REDUCER
import rootReducer from "./modules";

// HISTORY
export const history = createBrowserHistory();

// STORE
const store = createStore(rootReducer);

export default store;
