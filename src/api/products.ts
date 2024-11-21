import axios from 'axios';
export const fetchProducts = async () => {
	const data = await axios.get('https://homer-backend.onrender.com/products');
	return data.data;
};
