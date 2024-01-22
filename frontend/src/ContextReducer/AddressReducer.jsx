export const addressReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ADDRESS":
            return {
                ...state,
                address: [...state.address, action.payload],
            };
        case "DELETE_ADDRESS":
            return {
                ...state,
                address: state.address.filter((curr) => curr.id !== action.payload),
            };
        case "SHOW_ADDRESS":
            return {
                ...state,
                address:action.payload
            };
        default:
            return state;
    }
};
