import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import HomePage from "../components/pages/HomePage";
import PlayerPage from "../components/pages/PlayerPage";


const router = createBrowserRouter([
    
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <HomePage/>
            },
            {
                // revoir id:
                path: 'players/:id',
                element: <PlayerPage />
            },
        ],
    },
]);
// console.log(router, "rrr") ;

export default router ;

