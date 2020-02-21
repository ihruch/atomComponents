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
import Badge from './Components/Badge/SandBox';
import ListGroup from './Components/ListGroup/SandBox';
import Input from './Components/Input/SandBox';
import Tabbar from './Components/Tabs/SandBox';
import Tooltip from './Components/Tooltip/SandBox';
import Modal from './Components/Modal/SandBox';

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
        <Route exact path="/badge" component={Badge} />
        <Route exact path="/list-group" component={ListGroup} />
        <Route exact path="/input" component={Input} />
        <Route exact path="/tabbar" component={Tabbar} />
        <Route exact path="/tooltip" component={Tooltip} />
        <Route exact path="/modal" component={Modal} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
