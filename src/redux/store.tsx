import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
//store takes in combined reducers & state
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    reducers, {},
    composeEnhancers(applyMiddleware(thunk)) 
)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch