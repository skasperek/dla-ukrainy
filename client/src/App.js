import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import history from "./utils/history"
import GlobalStyle from "./GlobalStyles"
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persistor} from "./redux/store";
import i18n from "./config/language/i18n.config";
import {Provider} from "react-redux";

import HomePage from "./Areas/Home/pages/HomePage";
import {SocketProvider} from "./shared/ws/wsContext";

const App = () => {
    return (
        <SocketProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <GlobalStyle/>
                    <I18nextProvider i18n={i18n}>
                        <Router history={history} >
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                            </Switch>
                        </Router>
                    </I18nextProvider>
                </PersistGate>
            </Provider>
        </SocketProvider>
    )
}

export default App;
