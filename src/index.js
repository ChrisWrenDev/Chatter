import React from "react";
import ReactDOM from "react-dom";
import { PeerProvider } from "./context store/peer-context";
import { Provider } from "react-redux";
import store from "./redux store/index";
import App from "./App";
import "./custom.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PeerProvider>
        <App />
      </PeerProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
