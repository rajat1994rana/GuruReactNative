import types from "../types";
const initial_state = {
    locationInfo: {},
};

export default function (state = initial_state, action) {

    switch (action.type) {
        case types.LOCATION: {
            const data = action.payload;
            return { locationInfo: {...data} };
        }
    }
    return { ...state };
};