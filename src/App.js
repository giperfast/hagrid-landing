import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing.jsx'
import Error_404 from './pages/error-404.jsx'

function App() {
  	return (
    	<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing/>}/>
					<Route path="*" element={<Error_404/>} status={404}/>
				</Routes>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
