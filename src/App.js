import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/movie/:id" element={<Detail />} />
				<Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
