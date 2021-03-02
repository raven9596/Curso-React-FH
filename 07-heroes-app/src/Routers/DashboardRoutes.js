import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { marvelScreen } from '../components/marvel/marvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { dcScreen } from '../components/dc/dcScreen';
import { Navbar } from '../components/ui/Navbar';


export const DashboardRoutes = () => {
  return (
    <>

    <Navbar />

    <div className="container mt-2">
      <Switch>

        <Route exact path="/marvel" component={ marvelScreen } />
        <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
        <Route exact path="/dc" component={ dcScreen } />

        <Redirect to="/marvel"/>

      </Switch>
    </div>
      
    </>
  )
}
