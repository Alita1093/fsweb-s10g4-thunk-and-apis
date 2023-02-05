import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import thunk from "redux-thunk";
import { saveState, loadState } from "./localStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const persistedState = loadState();
const store = createStore(myReducer, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
  saveState({
    favs: store.getState().favs,
  });
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
