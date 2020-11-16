import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux' //компонент в который обораиваем наше приложение

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


const app = (//при передаче сторе компоненты понимают что используем редукс
  <Provider store={store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'))

reportWebVitals();
