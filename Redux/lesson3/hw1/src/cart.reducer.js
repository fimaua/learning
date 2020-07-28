import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js'

const initialState = {
    products: [],
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload.productData)
            }
        case REMOVE_PRODUCT: {
            const newProduct = state.products.filter(product =>
                product.id !== action.payload.productId)
            return {
                ...state,
                products: newProduct,
            }
        }
        default:
            return state;
    }
}