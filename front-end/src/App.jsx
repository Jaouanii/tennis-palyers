// import HomePage from './components/pages/HomePage'

import './App.css'
import router from './service/Router'
import { RouterProvider } from 'react-router-dom';

const App = () =>
  <RouterProvider router={router} />;

export default App;
