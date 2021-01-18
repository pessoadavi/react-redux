import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'          // Import da integração que traz o component chamado Provider que vai envolver a aplicação  
import configStore from './store/store.config'

const store = configStore()   // Função que retorna o createStore 

/* Componente Provider envolve a aplicação 
   fazendo a integração entre o react e o redux.
   Através dele que {store} é disponibilizado  */

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

reportWebVitals();
