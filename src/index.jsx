import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./styles/Main.scss";
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)