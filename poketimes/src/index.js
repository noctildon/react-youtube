import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 匯入所需模組createStore和Provider
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

// store需input一個reducer(這定義在另一個檔案中)
const store = createStore(rootReducer) // 建立store

// 用Provider tag 包住要渲染的element
ReactDOM.render(<Provider store={store}>< App /></Provider>, document.getElementById('root'))
serviceWorker.unregister()