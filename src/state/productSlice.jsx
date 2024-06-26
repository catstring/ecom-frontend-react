import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    products: [],
    error: ''
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    // const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/products`);
    const response = await axios.get(`/ecom-api/api/products`);
    return response.data;
  });

// export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
//     return axios
//         .get('/api/products/')
//         // .get('https://ecom-backend-python-production.up.railway.app/api/products/')

//         // .then(response => response.data.map(user => user.id))
//         .then(response => response.data)
// })

const productListSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})
  
// export const {} = productListSlice.actions;
// export const { productListRequest, productListSuccess, productListFail } = productListSlice.actions;
export default productListSlice.reducer