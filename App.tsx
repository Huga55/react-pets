import React from 'react';
import { Provider } from 'react-redux';
import store, { persistore } from './Redux/store';
import MainLayout from './src/layouts/MainLayout';
import { PersistGate } from "redux-persist/integration/react";
import Loader from './src/utils/Loader';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={<Loader />}>
        <MainLayout />
      </PersistGate>
    </Provider>
  );
}
