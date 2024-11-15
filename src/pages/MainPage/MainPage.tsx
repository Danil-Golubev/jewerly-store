import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './styles.module.css';

export const MainPage = () => {
	return (
		<>
			<div className={styles.main}>
				<img
					alt='Main-image'
					className={styles.mainImage}
					src='https://www.homer.com/cdn/shop/files/desktop_45547f03-5bbe-4ace-9fc5-832e459000c0_1800x.png?v=1687880815'
				/>
				<div className={styles.showcaseBlock}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				<div className={styles.videoMain}>
					<div className={styles.magazineBlock}>
						<div className={styles.imageBlock}>
							<img
								alt='magazine'
								className={styles.magazineImage}
								src='https://www.homer.com/cdn/shop/files/0_front-cover_1200x.png?v=1684768508'
							/>
						</div>
						<div className={styles.magazineCard}>
							<div className={styles.magazineCardBlock}>
								<div>
									<div className={styles.magazineCardTitle}>Mutations</div>
									<div className={styles.magazineCardDesc}>photographs by Frank Ocean</div>
								</div>
								<div className={styles.buttonAdd}>
									<div className={styles.buttonAddInfo}>
										<div className={styles.cardTitle}>Sold out</div>
										<div className={styles.cardPrice}>€82,00</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.videoBlock}>
						<video className={styles.video} autoPlay={true} loop={true} muted={true}>
							<source
								src='https://cdn.shopify.com/videos/c/o/v/3336e4477eba43ecaf88e6023908e5b3.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
				{/* <div className={styles.storeInfoBlock}>
					<div className={styles.storeInfo}>
						<img
							className={styles.storeInfoImage}
							src='https://www.homer.com/cdn/shop/files/DSCF9361_rafv2_2000px_2000x.jpg?v=1668092669'
						/>
					</div>
				</div> */}
			</div>
		</>
	);
};
