import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { SideMainMenu } from './components/SideMainMenu/SideMainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllProducts } from './pages/AllProducts/AllProducts';

function App() {
	return (
		<>
			<SideMainMenu />
			<Header />
			<div className='main'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/products' element={<AllProducts />} />
				</Routes>
			</div>

			{/* <Footer /> */}
		</>
	);
}

export default App;
