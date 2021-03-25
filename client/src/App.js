import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


const App = () => {

  return (
    <BrowserRouter> 
      <Container maxWidth="lg">
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>

      </Container>
    </BrowserRouter>
  )
}

export default App;