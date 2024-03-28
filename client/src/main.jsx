import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux'
import store from './Store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>,
)
