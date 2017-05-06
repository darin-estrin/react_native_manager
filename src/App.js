import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyClCBJn97polD46Xc6fzDcfOWWUwrQcOk8',
            authDomain: 'manager-f6966.firebaseapp.com',
            databaseURL: 'https://manager-f6966.firebaseio.com',
            projectId: 'manager-f6966',
            storageBucket: 'manager-f6966.appspot.com',
            messagingSenderId: '530055746697'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
