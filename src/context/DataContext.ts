import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { DataTypeArray } from "../@types/DataType";

export type DataContextType = {
    data: DataTypeArray,
    setData: Dispatch<SetStateAction<DataTypeArray>>
}

export const DataContext = createContext<DataContextType | undefined> (undefined)

export const useDataContext = () => {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error('DataContext deve ser usado dentro de um DataContextProvider')
    }
    return context
}