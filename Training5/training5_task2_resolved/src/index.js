import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor} loading={null}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
