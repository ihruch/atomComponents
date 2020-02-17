import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import Button from './Components/Button/SandBox';
import Image from './Components/Image/SandBox';
import Icon from './Components/Icon/SandBox';
import ButtonGroup from './Components/ButtonGroup/SandBox';
import Chip from './Components/Chip/SandBox';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/button-group" component={ButtonGroup} />
        <Route exact path="/icon" component={Icon} />
        <Route exact path="/image" component={Image} />
        <Route exact path="/chip" component={Chip} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
