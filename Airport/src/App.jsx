import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import SearchFlights from './components/SearchFlights.jsx';
import store from './store.js';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/">
                    <SearchFlights />
                </Route>
            </BrowserRouter>
        </Provider>
    )
}
export default App