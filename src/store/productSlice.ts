// productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../types'; // импортируем тип данных товаров
import { getProductType } from '../api/productTypes';

interface ProductsState {
	items: ProductType[];
	loading: boolean;
	error: string | null;
}

const initialState: ProductsState = {
	items: [],
	loading: false,
	error: null,
};

// Асинхронный экшен для загрузки товаров
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	const response = await getProductType();
	return response;
});

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.loading = false;
				state.error = 'Ошибка загрузки данных';
			});
	},
});

export default productsSlice.reducer;
