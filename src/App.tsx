import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<div className='main'>
				<MainPage />
			</div>
			<Footer />
		</>
	);
}

export default App;
