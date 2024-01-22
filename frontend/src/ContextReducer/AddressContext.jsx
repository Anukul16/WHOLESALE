import { createContext, useContext, useReducer } from "react";
import { addressReducer } from "./AddressReducer";


const Address = createContext()


const AddressContext = ({children}) => {

    const [addressState,addressDispatch] = useReducer(addressReducer,{
        address:[]
    })

    return(
        <Address.Provider value={{addressState,addressDispatch}}>
            {children}
        </Address.Provider>
    )

}

export default AddressContext

export const AddressState = () => {
    return useContext(Address)
}

