import styles from './styles.module.css';

export const Footer = () => {
	return (
		<>
			<div className={styles.footerBlock}>
				<div className={styles.logoBlock}>
					<svg className={styles.logo} enable-background='new 0 0 124.99 29.39' viewBox='0 0 124.99 29.39'>
						<title>Homer</title>
						<path
							className='hmr-header-logo-r fade'
							d='m120.61 4.47c2.41 0 4.38 1.97 4.38 4.38s-1.97 4.38-4.38 4.38-4.38-1.97-4.38-4.38 1.97-4.38 4.38-4.38zm-.72 6.84h-1.26v-4.92h2.7c1.02 0 1.68.7 1.68 1.6 0 .88-.61 1.52-1.56 1.58l1.63 1.63c.59-.6.95-1.44.95-2.35 0-1.88-1.54-3.42-3.42-3.42s-3.42 1.54-3.42 3.42 1.54 3.42 3.42 3.42c.91 0 1.75-.36 2.37-.96h-1.37l-1.61-1.74h-.12v1.74zm1.26-2.7c.42 0 .6-.24.6-.6s-.18-.6-.6-.6h-1.26v1.2z'
						></path>
						<path d='m0 0h6.2v9.9c1.51-1.67 3.63-2.93 6.73-2.93 5.05 0 8.07 2.85 8.36 8.03 1.26-4.89 5.42-8.03 11.25-8.03 5.79 0 9.95 3.1 11.21 7.95v-7.34h6.2v2.4c1.3-1.79 3.38-3.02 6.2-3.02 2.85 0 5.09 1.3 6.32 3.34 1.47-1.79 3.79-3.34 7.17-3.34 4.93 0 7.87 2.89 8.11 8.11 1.18-4.69 5.18-8.11 10.84-8.11 5.67 0 9.5 3.3 10.76 8.19v-7.57h6.2v2.77c1.1-2.04 2.77-3.38 6.28-3.38h1.26v5.67h-2.61c-2.81 0-4.93 1.06-4.93 5.05v11.09h-6.2v-5.26c-1.47 3.26-4.93 5.87-10.48 5.87-6.28 0-9.95-3.26-11.13-7.83v7.21h-6.2v-12.18c0-2.65-.69-4.52-3.46-4.52-2.36 0-4.24 1.63-4.24 5.09v11.62h-6.2v-12.19c0-2.65-.69-4.52-3.46-4.52-2.36 0-4.24 1.63-4.24 5.09v11.62h-6.2v-7.38c-1.26 4.81-5.42 7.99-11.21 7.99s-9.95-3.18-11.21-7.99v7.38h-6.2v-12.23c0-2.65-1.06-4.48-3.83-4.48-3.06 0-5.09 2.16-5.09 5.62v11.09h-6.2zm27.02 18.18c0 3.22 1.67 6.44 5.5 6.44s5.5-3.22 5.5-6.44c0-3.3-1.67-6.44-5.5-6.44-3.82 0-5.5 3.14-5.5 6.44zm66.61-2.12c-.24-2.93-2.08-4.69-4.89-4.69-2.85 0-4.81 1.87-5.14 4.69zm-10.03 3.91c.24 3.1 2.24 4.93 5.38 4.93 2.65 0 4.04-1.14 4.65-2.45h5.71v-2.49h-15.74z'></path>
					</svg>
				</div>
				<div className={styles.infoMain}>
					<div className={styles.infoBlock}>
						<div className={styles.infoBlockTitle}>Contact</div>
						<div className={styles.infoBlockPoint}>Store</div>
						<div className={styles.infoBlockPoint}>Contact Us</div>
						<div className={styles.infoBlockPoint}>Subscribe to Newsletter</div>
					</div>

					<div className={styles.infoMain}>
						<div className={styles.infoBlock}>
							<div className={styles.infoBlockTitle}>Legal</div>
							<div className={styles.infoBlockPoint}>Privacy Policy</div>
							<div className={styles.infoBlockPoint}>Terms and Conditionss</div>
						</div>
					</div>
					<div className={styles.infoMain}>
						<div className={styles.infoBlock}>
							<div className={styles.infoBlockTitle}>Social</div>
							<div className={styles.infoBlockPoint}>Instagram</div>
							<div className={styles.infoBlockPoint}>Discord</div>
						</div>
					</div>
					<div className={styles.infoMain}>
						<div className={styles.infoBlock}>
							<div className={styles.infoBlockTitle}>About</div>
							<div className={styles.infoBlockPoint}>About Our Diamonds</div>
							<div className={styles.infoBlockPoint}>Delivery Information</div>
							<div className={styles.infoBlockPoint}>Payment Information</div>
							<div className={styles.infoBlockPoint}>Returns and Exchanges</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
