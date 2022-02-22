import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    todo: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function createTODO(todo) {
        dispatch({
            type: "CREATE_TODO",
            payload: todo,
        });
    }

    function deleteTODO(id) {
        dispatch({
            type: "DELETE_TODO",
            payload: id,
        });
    }

    function editTODO(id) {
        console.log(id);
        dispatch({
            type: "EDIT_TODO",
            payload: id,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                todo: state.todo,
                createTODO,
                editTODO,
                deleteTODO,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
