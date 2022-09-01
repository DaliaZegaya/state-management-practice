import { createContext, useReducer } from "react";
import { counterReducer } from "../store/reducers/counter-reducer";

export const counterContext = createContext()

export default function CounterProvider({children}){
    const [contextState, dispatch] = useReducer(counterReducer, 0)

    return (
        <counterContext.Provider value={{contextState, dispatch}}>
            {children}
        </counterContext.Provider>
    )
}