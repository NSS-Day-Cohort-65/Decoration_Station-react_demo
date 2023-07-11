import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { DecorationStation } from './components/DecorationStation'

// createRoot(rootElement) is a React utility function used to create a react root element, which is a DOM element in which UI components render themselves. It takes as a parameter the root element that should be created.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DecorationStation />
  </React.StrictMode>
)
