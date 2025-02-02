import styles from './styles.module.css';
export const SkeletonProductPage = () => {
	return (
		<div className={styles.productBlock}>
			<div className={styles.contentBlock}>
				<div className={styles.photoBlock}>
					<div className={styles.mainImage} />
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.infoBlockContent}>
						<div className={styles.mainInfo}>
							<div className={styles.mainTitle}></div>
						</div>
						<div className={styles.additionalInfo}>
							<div className={styles.infoColumns}>
								<div className={styles.row}></div>
								<div className={styles.row}></div>
								<div className={styles.row}></div>
							</div>
						</div>
						<p className={styles.description}></p>
						<div className={styles.buttons}>
							<div className={styles.addButton}>
								<div className={styles.buttonTitle}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
