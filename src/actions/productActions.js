// import axios from 'axios'
// import {
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_LIST_FAIL,
// } from '../constants/productConstants.js'

// export const listProducts = () => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST })
//         const { data } = await axios.get('/api/products')
//         dispatch({ 
//             type: PRODUCT_LIST_SUCCESS, 
//             payload: data 
//         })
//     } catch (error) {
//         dispatch({ 
//             type: PRODUCT_LIST_FAIL, 
//             payload: error.message && error.response.data.message
//                 ? error.response.data.message
//                 : error.message, 
//         })
//     }
// }