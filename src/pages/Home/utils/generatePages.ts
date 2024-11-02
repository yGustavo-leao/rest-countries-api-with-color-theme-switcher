import { DataTypeArray } from "../../../@types/DataType";

export const generatePages = (itemsPerPage: number, array: DataTypeArray) => {
    const pageArray: DataTypeArray[] = []
    
    for (let start = 0, end = itemsPerPage; start < (array.length / itemsPerPage); start++, end += itemsPerPage) {
        pageArray.push(array.slice(start * itemsPerPage, end))
    }

    return pageArray
}