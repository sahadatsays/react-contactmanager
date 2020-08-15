import React from 'react';
import './App.css';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/layouts/Navbar';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Test from './test/Test';
// import TestParams from './test/TestParams';

function App() {

  return (
    <Provider>
      <Router>
        <div className="app">
          <Navbar branding="Contact Manager" />

          <div className="container">
            <Switch>
              <Route exact path="/">
                <Contacts />
              </Route>
              <Route exact path="/about" component={About}></Route>
              {/* <Route exact path="/test/:name" component={TestParams}></Route> */}
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
              <Route exact path="/test/request" component={Test} />

              <Route component={PageNotFound}>

              </Route>
            </Switch>
          </div>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
