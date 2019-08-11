import React from 'react';
import '../styles/app.scss';
import Calculator from "./Calculator";
import {Provider} from 'react-redux';
import {store} from '../store';

function App() {
    return (
        <Provider store={store}>
            <div className={'c-app'}>
                <Calculator/>
            </div>
        </Provider>
    );
}

export default App;
