import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import reducerCombine from "../reducer";
import thunk from "redux-thunk";

const store = createStore(
    reducerCombine,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;