import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFoundPage from './pages/NotFound/NotFound';
import CharacterPage from './pages/CharacterPage';
import App from './pages/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: ':id', element: <CharacterPage /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
