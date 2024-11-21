import axios from 'axios';
export const fetchProductType = async () => {
	const data = await axios.get('https://homer-backend.onrender.com/product-type');
	return data.data;
};
