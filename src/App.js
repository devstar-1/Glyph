import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import HeaderComponent from './components/organisms/HeaderComponent';
import ContentComponent from './components/organisms/ContentComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import './assets/css/style.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh',
    },
    mainBlock: {
        backgroundColor: 'white',
        // padding: 30,
        width: '100%'
    },
    headerBlock: {
        padding: 20,
        backgroundColor: 'white',
        borderBottom:'1px solid rgb(61 87 170 / 15%)',
        height:'70px',
        paddingLeft:'25px',
        paddingTop:'20px'
    }
});

const App = () => {

    return (
        <React.StrictMode>
            <Row className={css(styles.container) + " scrollVisible"}>
                <Provider store={store}>
                    <Router>
                        <Column flexGrow={3} className={css(styles.mainBlock)}>
                            <HeaderComponent className={css(styles.headerBlock)} />
                            <Switch>
                                <Route exact path="/">
                                    <ContentComponent />
                                </Route>
                            </Switch>
                        </Column>
                    </Router>
                </Provider>
            </Row>
        </React.StrictMode>
    )
}

export default App;
