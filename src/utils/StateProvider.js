import { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();  

export const StateProvider = ({children,initialState, reducer}) =>( 

    <StateContext.Provider value = {useReducer(reducer,initialState)}>
    {/*  reducer is the function that will listen to the changes in the data layer  
     */}


        {children} 



    </StateContext.Provider> // children is the App component

);

export const useStateProvider = () => useContext(StateContext); // this is how we use it inside a component

