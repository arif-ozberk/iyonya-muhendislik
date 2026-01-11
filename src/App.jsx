import React from 'react';

// Styles
import "./styles/globals.scss";

// React-Router
import { router } from './routes/routes';
import { RouterProvider } from 'react-router';

// Context
import { UIContextProvider } from './context/UIContext';
import { ProjectContextProvider } from './context/ProjectContext';


const App = () => {

	return (
		<UIContextProvider>
			<ProjectContextProvider>
				<div className={`App`}>
					<RouterProvider router={router} />
				</div>
			</ProjectContextProvider>
		</UIContextProvider>
	);
}

export default App;
