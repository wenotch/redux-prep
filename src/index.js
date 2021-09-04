import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { createStore } from "redux";
import { bankingReducer } from "./redux/reducers/bankingReducer";
import { Provider } from "react-redux";

const store = createStore(bankingReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
