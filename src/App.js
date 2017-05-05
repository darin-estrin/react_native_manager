import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
