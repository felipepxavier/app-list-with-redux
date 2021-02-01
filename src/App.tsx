import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import  {store, persistor}  from './store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

const App = function () {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <GlobalStyles />
       <ToastContainer limit={4} autoClose={4000} />
       <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;