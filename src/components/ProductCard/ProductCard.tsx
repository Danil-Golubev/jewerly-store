import Select from 'react-select';
import styles from './styles.module.css';
import { IdAndTitle, Product, ProductType } from '../../types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CustomSelect } from '../CustomSelect/CustomSelect';

type ProductCard = {
	id: string;
	title: string;
	price: number;
	variants: Product[];
	chainType: [IdAndTitle];
};

export const ProductCard = ({ id, title, price, variants, chainType }: ProductCard) => {
	const [selectedVariant, setSelectedVariant] = useState<Product>(variants[0]);
	const [optionsSizes, setOptionsSizes] = useState<[{ value: string; label: string }]>();
	const [optionsChains, setOptionsChains] = useState<[{ value: string; label: string }]>();

	const handleOptions = () => {
		const temp = selectedVariant.sizes.map((sizeObj) => ({
			value: sizeObj.size,
			label: sizeObj.size,
		}));
		setOptionsSizes(temp as [{ value: string; label: string }]);

		const temp2 = chainType.map((sizeObj) => ({
			value: sizeObj._id,
			label: sizeObj.title,
		}));
		setOptionsChains(temp2 as [{ value: string; label: string }]);
	};

	useEffect(() => {
		handleOptions();
	}, []);
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
								key={variant._id}
								onClick={() => setSelectedVariant(variants[_index])}
								className={styles.variant}
								style={{
									backgroundColor: variant.color.color,
									height: variant === selectedVariant ? '20px' : '15px',
									width: variant === selectedVariant ? '20px' : '15px',
								}}
							></div>
						))}
					</div>
					{/* <Select styles={{ backgroundColor: 'red' }} className={styles.select} options={options} /> */}
					{selectedVariant.sizes.length > 0 ? <Select options={optionsSizes} /> : null}
					{chainType.length > 0 ? <Select options={optionsChains} /> : null}
					<div className={styles.addButton}>
						<div className={styles.buttonTitle}>Add To Cart {price}$</div>
					</div>
				</div>
			</div>
		</>
	);
};
