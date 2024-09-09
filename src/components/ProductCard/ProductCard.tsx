import { Button, Select } from '@mui/material';
import styles from './styles.module.css';

export const ProductCard = () => {
	return (
		<>
			<div className={styles.mainBlock}>
				<div className={styles.imageBlock}>
					<img
						className={styles.mainImage}
						alt='123'
						src='https://www.homer.com/cdn/shop/products/220901_SphereLegs_Leaf_01__2048_800x.png?v=1704301791'
					/>
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.title}>Sphere Legs Pendant</div>
					<div className={styles.desc}>Cody Green</div>
					<div className={styles.variants}></div>
					<Select className={styles.select} />
					<Select className={styles.select} />
					<div className={styles.addButton}>
						<div className={styles.buttonTitle}>Add To Cart</div>
					</div>
				</div>
			</div>
		</>
	);
};
