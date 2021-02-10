import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import AmyiI from './pages/AmyiI';
import AmyiII from './pages/AmyiII';
import AmyiIII from './pages/AmyiIII';
import MiniRanking from './pages/MiniRanking';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MiniRanking}/>
        <Route path="/amyi" exact={true} component={AmyiI}/>
        <Route path="/amyii" exact={true} component={AmyiII}/>
        <Route path="/amyiii" exact={true} component={AmyiIII}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);