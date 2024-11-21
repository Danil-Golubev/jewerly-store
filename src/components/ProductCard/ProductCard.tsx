import { Button, Select } from '@mui/material';
import styles from './styles.module.css';
import { IdAndTitle, Product, ProductType } from '../../types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type ProductCard = {
	id: string;
	title: string;
	price: number;
	variants: Product[];
};

export const ProductCard = ({ id, title, price, variants }: ProductCard) => {
	const [selectedVariant, setSelectedVariant] = useState<Product>(variants[0]);

	return (
		<>
			<div className={styles.mainBlock}>
				<Link to={`${selectedVariant._id}`}>
					<div className={styles.imageBlock}>
						<img className={styles.mainImage} alt='123' src={selectedVariant.imageURL} />
					</div>
				</Link>
				<div className={styles.infoBlock}>
					<div className={styles.title}>{title}</div>
					<div className={styles.desc}>{selectedVariant.color.title}</div>

					<div className={styles.variantsBlock}>
						{variants.map((variant, _index) => (
							<div
								onClick={() => setSelectedVariant(variants[_index])}
								className={styles.variant}
								style={{
									backgroundColor: variant.color.color,
									height: variant === selectedVariant ? '20px' : '15px',
									width: variant === selectedVariant ? '20px' : '15px',
								}}
							></div>
						))}
						<div className={styles.variant} />
					</div>
					<Select className={styles.select} />
					<Select className={styles.select} />
					<div className={styles.addButton}>
						<div className={styles.buttonTitle}>Add To Cart {price}$</div>
					</div>
				</div>
			</div>
		</>
	);
};
