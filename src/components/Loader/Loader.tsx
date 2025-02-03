import { motion } from 'framer-motion';
import styles from './styles.module.css';
export const Loader = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 0 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<div className={styles.productBlock}>
				<div className={styles.loader}>
					<div className={styles.center}></div>
					{/* Вращающаяся часть */}
					<div className={styles.arms}>
						{/* Маленькие круги */}
						<div className={styles.arm}></div>
						<div className={styles.arm}></div>
						<div className={styles.arm}></div>
						<div className={styles.arm}></div>

						{/* Горизонтальная и вертикальная линии */}
						<div className={styles.connection}></div>
						<div className={styles.connectionVertical}></div>
					</div>
				</div>
			</div>
		</motion.div>

		// <div className={styles.productBlock}>
		// 	<div className={styles.contentBlock}>
		// 		<div className={styles.photoBlock}>
		// 			<div className={styles.mainImage} />
		// 		</div>
		// 		<div className={styles.infoBlock}>
		// 			<div className={styles.infoBlockContent}>
		// 				<div className={styles.mainInfo}>
		// 					<div className={styles.mainTitle} />
		// 				</div>
		// 				<div className={styles.additionalInfo}>
		// 					<div className={styles.infoColumns}>
		// 						<div className={styles.row} />
		// 						<div className={styles.row} />
		// 						<div className={styles.row} />
		// 					</div>
		// 				</div>
		// 				<p className={styles.description} />
		// 				<div className={styles.buttons}>
		// 					<div className={styles.addButton}>
		// 						<div className={styles.buttonTitle} />
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};
