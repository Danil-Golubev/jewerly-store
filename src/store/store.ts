import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import { ProductType } from '../types';

// Функция для загрузки состояния из localStorage
const loadState = () => {
	try {
		const serializedState = localStorage.getItem('reduxState');
		return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (e) {
		console.error('Ошибка загрузки состояния:', e);
		return undefined;
	}
};

export type RootState = {
	products: {
		items: ProductType[];
		loading: boolean;
		error: string | null;
	};
};

const preloadedState = loadState();

export const store = configureStore({
	reducer: {
		products: productsReducer,
	},
	preloadedState: preloadedState as RootState,
});

// Типы
export type AppDispatch = typeof store.dispatch;
