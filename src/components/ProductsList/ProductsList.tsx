import { ReactNode } from 'react';
import styles from './styles.module.css';
interface ProductsListProps {
	children: ReactNode; // Тип для дочерних элементов
}

export const ProductsList = ({ children }: ProductsListProps) => {
	return <div className={styles.list}>{children}</div>;
};
