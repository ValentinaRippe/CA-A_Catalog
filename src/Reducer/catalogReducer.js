
import { type } from '../Actions/catalogAction'
import { dataProducts } from '../Data'
export const catalogInitialState = { products: [] }


export function catalogReducer(state, action){
    switch (action.type) {
        case type.bookFilter:
            return { products: state.dataProducts[0].products }
        case type.plannersFilter:
            return { products: state.dataProducts[1].products }
        case type.packagingFilter:
            return { products: state.dataProducts[2].products }
            case type.extrasFilter:
                return { products: state.dataProducts[3].products }
    }
} 