import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
import News from './News';
import MovieItem from './MovieItem';
import NoMatch from './NoMatch';
import MovieDetail from './MovieDetail';
import Sport from './Sport';
import Home from './Home';
import News_Detail from './News_Detail';
import Entertainment from './Entertainment';
import Health from './Health';
import Business from './Business';
import Technology from './Technology';
import Science from './Science';
import Search from './Search';
import Register from './Register';

class ExampleRouting extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    {/*<Route exact path="/" render={() => {
                        return <Redirect to="/MovieItem" />
                    }} />
                    */}
                    <Route exact path="/" render={() => {
                        return <Redirect to="/Home" />
                    }} />
                    <Route path="/Home" component={Home}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Sport" component={Sport}/>
                    <Route path="/Health" component={Health}/>
                    <Route path="/Business" component={Business}/>
                    <Route path="/Technology" component={Technology}/>
                    <Route path="/Science" component={Science}/>
                    <Route path="/Search" component={Search}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/Entertainment" component={Entertainment}/>
                    <Route exact path="/MovieItem" component={MovieItem} />
                    {/* <Route exact path="/News/" component={News} /> */}
                    <Route exact path="/News_Detail/:ID" component={News_Detail} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        );
    }   
}

export default ExampleRouting;
