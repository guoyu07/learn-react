import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import KanbanContainer from './containers/KanbanContainer';
import { createStore } from 'redux';
import KanbanApp from './reducers';

let store = createStore(KanbanApp, window.devToolsExtension());

render(
  <Provider store={store}>
    <KanbanContainer />
  </Provider>,
  document.getElementById('root')
);
