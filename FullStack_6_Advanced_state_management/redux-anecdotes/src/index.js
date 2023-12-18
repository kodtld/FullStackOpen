import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import readystore from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={readystore}>
    <App />
  </Provider>
)
