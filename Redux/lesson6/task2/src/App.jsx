import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './users/UserInfo.jsx';
import SearchField from './users/SearchField.jsx';
import store from './store.js';

const App = () => {
    return (
        <Provider store={store}>
            <UserInfo />
            <SearchField />
        </Provider>
    )
}
export default App