import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const initialState = {
    allTickets: [],
    airTickets: [],
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
                const filteredFoo = ({
                        all = false,
                        without = false,
                        one = false,
                        two = false,
                        three = false,
                    },
                    allTickets
                ) => {
                    let data = [
                        ...allTickets.filter((ticket) => {
                            const transfer = ticket.segments[0].stops.length;
                            if (all) {
                                return ticket;
                            }
                            if (without) {
                                console.log("WITHOUT");
                                return transfer === 0;
                            }
                            if (one) {
                                console.log("ONE");
                                return transfer === 1;
                            }
                            if (two) {
                                return transfer === 2;
                            }
                            if (three) {
                                return transfer === 3;
                            }
                            return null;
                        }),
                    ];
                    return data.length !== 0 ? data : allTickets;
                };

                const { allTickets } = state;
                const { airTickets } = state;
                filteredFoo(action.payload, airTickets);
                return {
                    ...state,
                    airTickets: filteredFoo(action.payload, allTickets),
                };
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