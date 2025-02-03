import { useEffect, useState } from 'react';
import { IdAndTitle, ProductType } from '../../types';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { SkeletonProductCard } from '../../Skeletons/SkeletonProductCard/SkeletonProductCard';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProducts } from '../../store/productSlice';

export const AllProducts = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { items: products } = useSelector((state: RootState) => state.products);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (products.length === 0) {
			dispatch(fetchProducts());
		}
	}, [dispatch, products.length]);

	useEffect(() => {
		if (products.length > 0) {
			// После загрузки данных, даем время для завершения анимации перед рендером продуктов
			setIsLoaded(true);
		}
	}, [products.length]);

	if (!products.length && !isLoaded) {
		// Плавное исчезновение скелетона
		return (
			<motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
				<ProductsList>
					<SkeletonProductCard />
					<SkeletonProductCard />
					<SkeletonProductCard />
				</ProductsList>
			</motion.div>
		);
	}

	// Плавное появление продуктов после завершения исчезновения скелетона
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<ProductsList>
				{products.map((item: ProductType) => (
					<ProductCard
						key={item._id} // Добавляем ключ для каждого элемента
						id={item._id}
						price={item.price}
						title={item.title}
						variants={item.variants}
						chainType={item.chainType as [IdAndTitle]}
					/>
				))}
			</ProductsList>
		</motion.div>
	);
};
