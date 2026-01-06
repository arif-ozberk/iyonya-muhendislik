import { createContext } from "react";


export const UIContext = createContext({});


export const UIContextProvider = ({ children }) => {


    return (
        <UIContext.Provider
            value={{
                
            }}
        >
            {children}
        </UIContext.Provider>
    )
}