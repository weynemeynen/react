import './polyfills'

// для проектов на create-react-app
// import 'react-app-polyfill/ie9'
// import 'react-app-polyfill/stable';

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from '~/app'

ReactDOM.render(<App />, document.getElementById('root'))