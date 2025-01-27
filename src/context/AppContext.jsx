import  { createContext} from "react";

// Create a Context
export const AppContext = createContext();

// Create a provider component
export const AppContextProvider = (props) => {
    const value = {
       
    }
  

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}