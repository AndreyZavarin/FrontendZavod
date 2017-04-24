import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Widget from './containers/Widget'
import configureStore from './store/configureStore'

const store = configureStore()
render(<Widget store={store}/>, document.getElementById("root"))
