
import { type } from '../Actions/catalogAction'
import { dataProducts } from '../Data'

let all 
 
dataProducts.map(data =>{
     data.products.map(item =>{
         all = item
     })
 })

export const catalogInitialState = { products: [all] }

export function catalogReducer(state, action) {
    let filter;
    switch (action.type) {
        case type.booksFilter:
            filter = dataProducts[0].products
            return(filter)
        case type.plannersFilter:
            filter = dataProducts[1].products
            return(filter)
        case type.packagingFilter:
            filter = dataProducts[2].products
            return(filter)
        case type.extrasFilter:
            filter = dataProducts[3].products
            return(filter)
        case type.allFilter:
            return (all)
}
} 

