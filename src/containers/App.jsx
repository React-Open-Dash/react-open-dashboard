import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import routes from './routes';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const renderRoutes = routes => {
	return routes.map(route => {
		if (route.children) {
			return (
				<Route
					key={`route-${route.path}`}
					path={route.path}
					element={route.element}
				>
					{renderRoutes(route.children)}
				</Route>
			);
		} else {
			return (
				<Route
					key={`route-${route.path}`}
					path={route.path}
					element={route.element}
				/>
			);
		}
	});
};

function App() {
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<Routes>
						{renderRoutes(routes)}
						<Route path='*' element={<Navigate to={'/login'} />} />
					</Routes>
				</BrowserRouter>
			</I18nextProvider>
		</Provider>
	);
}

export default App;
