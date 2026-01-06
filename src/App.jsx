import React from 'react';

// Styles
import "./styles/globals.scss";

// React-Router
import { router } from './routes/routes';
import { RouterProvider } from 'react-router';

// Context
import { UIContextProvider } from './context/UIContext';


const App = () => {

	return (
		<UIContextProvider>
			<div className={`App`}>
				<RouterProvider router={router} />
			</div>
		</UIContextProvider>
	);
}

export default App;
