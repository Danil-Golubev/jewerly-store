import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { SideMainMenu } from './components/SideMainMenu/SideMainMenu';
import { Route, Routes } from 'react-router-dom';
import { AllProducts } from './pages/AllProducts/AllProducts';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { useEffect } from 'react';

function App() {
	// useEffect(() => {
	// 	const handleContextMenu = (event: MouseEvent) => event.preventDefault();
	// 	const handleKeyDown = (event: KeyboardEvent) => {
	// 		if (event.ctrlKey && ['C', 'X', 'U', 'A'].includes(event.key.toUpperCase())) {
	// 			event.preventDefault();
	// 		}
	// 	};
	// 	const handleDragStart = (event: DragEvent) => event.preventDefault();

	// 	document.addEventListener('contextmenu', handleContextMenu);
	// 	document.addEventListener('keydown', handleKeyDown);
	// 	document.addEventListener('dragstart', handleDragStart);

	// 	return () => {
	// 		document.removeEventListener('contextmenu', handleContextMenu);
	// 		document.removeEventListener('keydown', handleKeyDown);
	// 		document.removeEventListener('dragstart', handleDragStart);
	// 	};
	// }, []);

	return (
		<>
			<SideMainMenu />
			<Header />
			<div className='main'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/products' element={<AllProducts />} />
					<Route path='/products/:id' element={<ProductPage />} />
				</Routes>
			</div>

			{/* <Footer /> */}
		</>
	);
}

export default App;
