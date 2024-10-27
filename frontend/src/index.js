import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<App />} >
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

const url = `https://greenasaur.onrender.com//`; // Replace with your Render URL
const interval = 600000; // Interval in milliseconds (30 seconds)

//Reloader Function
function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}

setInterval(reloadWebsite, interval);