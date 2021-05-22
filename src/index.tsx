import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { DefaultRootState, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducers from './store/index';
import App from './App';

function saveToLocalStorage(state: DefaultRootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState, enhancer);

// const store = createStore(reducers, compose(applyMiddleware(thunk)))

store.subscribe(() => saveToLocalStorage(store.getState()))



ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>
,
  document.getElementById('root')
);

