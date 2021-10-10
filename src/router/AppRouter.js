import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import CardComponent from '../components/Card'
import Navbar from '../components/Navbar'
import Details from '../pages/Details'


export default function AppRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/details/:id" component={Details}/> 
                <Route path="/" component={CardComponent}/> 
            </Switch>
        </Router>
    )
}
