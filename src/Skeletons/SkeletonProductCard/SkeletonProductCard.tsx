import styles from './styles.module.css';
export const SkeletonProductCard = () => {
	return (
		<>
			<div className={styles.mainBlock}>
				<div className={styles.imageBlock}>
					<div className={styles.mainImage} />
				</div>
				<div className={styles.infoBlock}>
					{/* <div className={styles.title}></div>
					<div className={styles.desc}></div>
					<div className={styles.variantsBlock}></div> */}
					<div className={styles.addButton}>
						<div className={styles.buttonTitle}></div>
					</div>
				</div>
			</div>
		</>
	);
};
