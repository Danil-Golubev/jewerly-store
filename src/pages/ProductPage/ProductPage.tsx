import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IdAndTitle, Product, ProductType } from '../../types';
import { getProduct } from '../../api/product';
import Select from 'react-select';
import styles from './styles.module.css';
import { Loader } from '../../components/Loader/Loader';
import { motion } from 'framer-motion';
export const ProductPage = () => {
	const { id } = useParams();
	const [item, setItem] = useState<ProductType>();
	const [selectedVariant, setSelectedVariant] = useState<Product>();
	const [optionsSizes, setOptionsSizes] = useState<[{ value: string; label: string }]>(
		[] as unknown as [{ value: string; label: string }],
	);
	const [optionsChains, setOptionsChains] = useState<[{ value: string; label: string }]>(
		[] as unknown as [{ value: string; label: string }],
	);

	const handleItem = async () => {
		const data = await getProduct(id as string);
		if (data !== undefined) {
			data.product.variants.forEach((item: Product) => {
				if (item._id === id) {
					setSelectedVariant(item);
					const temp = item.sizes.map((sizeObj) => ({
						value: sizeObj.size,
						label: sizeObj.size,
					}));
					setOptionsSizes(temp as [{ value: string; label: string }]);
				}
			});
		}
		setItem(data.product);

		if (data?.product.chainType !== undefined) {
			const temp2 = data.product?.chainType.map((sizeObj: IdAndTitle) => ({
				value: sizeObj._id,
				label: sizeObj.title,
			}));
			setOptionsChains(temp2 as [{ value: string; label: string }]);
		}
	};

	useEffect(() => {
		handleItem();
	}, [id]);

	if (!item) {
		return <Loader />;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<div className={styles.productBlock}>
				<div className={styles.contentBlock}>
					<div className={styles.photoBlock}>
						<img className={styles.mainImage} alt='123' src={selectedVariant?.imageURL} />
					</div>
					<div className={styles.infoBlock}>
						<div className={styles.infoBlockContent}>
							<div className={styles.mainInfo}>
								<p className={styles.mainTitle}>{item?.title}</p>
								<p className={styles.price}>{item?.price} USD</p>
							</div>
							<div className={styles.additionalInfo}>
								<div className={styles.infoColumns}>
									<div className={styles.row}>
										<p className={styles.titleInfo}>Material</p>
										<p className={styles.valueInfo}>{item?.materialType.title}</p>
									</div>
									{item?.stoneType.title !== 'none' && (
										<div className={styles.row}>
											<p className={styles.titleInfo}>Stone type</p>
											<p className={styles.valueInfo}>{item?.stoneType.title}</p>
										</div>
									)}
									<div className={styles.row}>
										<p className={styles.titleInfo}>Dimensions</p>
										<p className={styles.valueInfo}>{item?.dimensions}</p>
									</div>

									<div className={styles.row}>
										<p className={styles.titleInfo}>Colors</p>

										<div className={styles.colorBlock}>
											<div className={styles.variantsBlock}>
												{item?.variants.map((variant, _index) => (
													<Link to={`/products/${variant._id}`}>
														<div
															// onClick={() => setSelectedVariant(item?.variants[_index])}
															className={styles.variant}
															style={{
																backgroundColor: variant.color.color,
																height: variant === selectedVariant ? '15px' : '10px',
																width: variant === selectedVariant ? '15px' : '10px',
															}}
														></div>
													</Link>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
							<p className={styles.description}>{item?.description}</p>
							<div>
								{optionsSizes?.length > 0 ? <Select options={optionsSizes} /> : null}
								{optionsChains?.length > 0 ? <Select options={optionsChains} /> : null}
								<div className={styles.addButton}>
									<div className={styles.buttonTitle}>
										<div>Add To Cart</div>
										<div>{item?.price}$</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{selectedVariant?.additionalImages.map((image: String) => (
					<img className={styles.additionalImage} alt='123' src={image as string} />
				))}
			</div>
		</motion.div>
	);
};
