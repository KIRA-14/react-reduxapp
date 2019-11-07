import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/store'
import AsyncApp from '../components/App'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}