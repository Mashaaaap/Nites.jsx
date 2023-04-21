import ReactDOM from 'react-dom/client'
import React from 'react'
import reportWebVitals from './reportWebVitals'

import App from './App'
import './style.css'
import './reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

let initialStore = [
  {
      text: "Note 1",
      theme: "orange"
  },
  {
      text: "Note 2",
      theme: "red"
  },
  {
      text: "Note 3",
      theme: "green"
  }
]

const reRender = (notesStore) => {
root.render(
  <div>
    <App
      notesStore = {notesStore}
      reRender = {reRender}
    />
  </div>
 )
}

reRender(initialStore)

reportWebVitals()
