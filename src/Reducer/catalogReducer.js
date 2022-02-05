
import { type } from '../Actions/catalogAction'
import { Products } from '../Components/Products/Products';
import { dataProducts } from '../Data'
export const catalogInitialState = { products: [] }


export function catalogReducer(state, action) {
    let allProducts;
    
    switch (action.type) {
        case type.bookFilter:
            allProducts = dataProducts[0].products
            console.log(allProducts)
            return(allProducts)
        case type.plannersFilter:
            return { products: state.dataProducts[1].products }
        case type.packagingFilter:
            return { products: state.dataProducts[2].products }
        case type.extrasFilter:
            return { products: state.dataProducts[3].products }
        case type.allFilter:
            return {}
        }
}
