import axios from 'axios';
export const getProduct = async (id: string) => {
	const data = await axios.get(`https://homer-backend.onrender.com/product/${id}`);
	return data.data;
};
