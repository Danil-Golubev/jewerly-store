import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/products';
import { IdAndTitle, Product, ProductType } from '../../types';
import { fetchProductType } from '../../api/productTypes';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const AllProducts = () => {
	const [products, setProducts] = useState<ProductType[]>([]);

	const getProducts = async () => {
		const data = await fetchProductType();
		setProducts(data);
	};
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<ProductsList>
				{products.map((item: ProductType) => (
					<ProductCard
						id={item._id}
						price={item.price}
						title={item.title}
						variants={item.variants}
						chainType={item.chainType as [IdAndTitle]}
					/>
				))}
			</ProductsList>
		</>
	);
};
