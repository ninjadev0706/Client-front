import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";
import App from "./App";
import thunkMiddleware from 'redux-thunk'
// import Preloader from "./components/Preloader";
import "./index.css";
// import { Provider } from 'react-redux';
// import reduxThunk from 'redux-thunk'
// import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers'

// const createStoreWithMiddlewares = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddlewares(reducers)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
