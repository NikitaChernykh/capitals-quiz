import React from 'react';
import Carousel from './components/carousel/carousel';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
  return (
    <main>
      <Provider store={store}>
        <Carousel />
      </Provider>
    </main>
  );
}

export default App;
