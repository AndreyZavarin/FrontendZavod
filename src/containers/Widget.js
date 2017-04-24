import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import App from './App'

function Widget({ store, history }) {

  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}

Widget.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Widget
