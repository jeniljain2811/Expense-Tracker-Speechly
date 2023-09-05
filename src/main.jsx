import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpeechProvider } from '@speechly/react-client'
import { Provider } from './Context/context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeechProvider appId='a54c8ebe-ef58-43df-ba44-7e490ec4f43a' language='en-US'>
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>,
)
