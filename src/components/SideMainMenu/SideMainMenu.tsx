import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { collections } from './consts';
export const SideMainMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	function openMenu() {
		setIsOpen(!isOpen);
	}
	useEffect(() => {
		window.addEventListener('openMenu', openMenu);
	}, []);
	return (
		<>
			<div className={`${styles.overlay} ${isOpen && styles.show}`} onClick={() => openMenu()}>
				<div
					className={`${styles.sidebar} ${isOpen && styles.open}`}
					onClick={(e) => e.stopPropagation()} // Остановка всплытия событий
				>
					<div className={styles.header}>
						<button className={styles.close} onClick={() => openMenu()}>
							X
						</button>
					</div>
					<div className={styles.collectionsList}>
						{collections.map((item) => (
							<div className={styles.itemsBox}>
								<a href={item.link} key={item.title}>
									{item.title}
								</a>
								<div className={styles.itemsList}>
									{item.items.map((image) => (
										<img alt={item.title} className={styles.image} src={image}></img>
									))}
								</div>
							</div>
						))}
						<div className={styles.filtersBox}>
							<h3>Filter by</h3>
							<div className={styles.filterTable}>
								<a className={styles.firstColumn}>Material</a>
								<a className={styles.secondColumn}>Filter</a>
							</div>
							<div className={styles.divider}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
