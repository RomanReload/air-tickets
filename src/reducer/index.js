import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import filteredFoo from "./functions";
const initialState = {
    errors: {
        status: false,
        info: null,
    },
    loader: true,
    allTickets: [],
    airTickets: [],
    showedTickets: 5,
};
export const ADD_ALL_TCKETS = "ADD_ALL-TICKETS";

export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_TCKETS:
            {
                let ticketsArr = [];
                if (action.payload) {
                    const {
                        data: { tickets },
                    } = action.payload;
                    ticketsArr = tickets;
                }
                return {
                    ...state,
                    airTickets: ticketsArr,
                    allTickets: ticketsArr,
                };
            }
        case "LOADER-OFF":
            {
                return {...state, loader: false };
            }
        case "ERROR":
            {
                return {
                    ...state,
                    errors: { status: true, info: "ERROR 500, PLEASE RELOAD THE PAGE" },
                };
            }
        case "LOW-COST-FAST-AIRPLANE":
            {
                let sortedTickets = [];
                const { airTickets } = state;
                if (action.payload === "LOW-COST") {
                    sortedTickets = airTickets.sort((a, b) => a.price - b.price);
                }
                if (action.payload === "FAST-AIRPLANE") {
                    sortedTickets = airTickets.sort(
                        (a, b) => a.segments[0].duration - b.segments[0].duration
                    );
                }
                return {...state, airTickets: [...sortedTickets] };
            }
        case "CHECKBOX-FILTER":
            {
                const { allTickets } = state;
                const { airTickets } = state;
                filteredFoo(action.payload, airTickets);
                return {
                    ...state,
                    airTickets: filteredFoo(action.payload, allTickets),
                };
            }
        case "SHOW-MORE-THICKETS":
            {
                const moreTickets = state.showedTickets + 5;
                return {...state, showedTickets: moreTickets };
            }
        case "SHOW-FIVE-TICKETS":
            {
                return {...state, showedTickets: 5 };
            }
        default:
            return state;
    }
};

const reducerCombine = combineReducers({
    form: formReducer,
    tickets: ticketsReducer,
});

export default reducerCombine;