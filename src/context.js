import React, { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";

// Creating App Context
const appContext = createContext();

// Initial state
const initialState = {
    messages: [],
    monthString: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    },
};

const AppProvider = ({ children }) => {
    // Reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <appContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </appContext.Provider>
    );
};

// Custom hook for using app context
const useAppContext = () => {
    return useContext(appContext);
};

export { useAppContext, AppProvider };
