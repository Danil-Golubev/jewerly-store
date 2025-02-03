import axios from 'axios';
export const getProducts = async () => {
	const data = await axios.get('https://homer-backend.onrender.com/products');
	return data.data;
};
