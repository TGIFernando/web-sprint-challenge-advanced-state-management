import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//redux imports
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { mainReducer } from './Reducer/MainReducer'
import thunk from 'redux-thunk'

const store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));