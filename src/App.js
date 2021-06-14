import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/NewsType/Home';
import World from './components/NewsType/World';
import Us from './components/NewsType/Us';
import Politics from './components/NewsType/Politics';
import Economy from './components/NewsType/Economy';
import Business from './components/NewsType/Business';
import Tech from './components/NewsType/Tech';
import Market from './components/NewsType/Market';
import Opinion from './components/NewsType/Opinion';
import LifeArts from './components/NewsType/LifeArts';
import RealEstate from './components/NewsType/RealEstate';
import Sports from './components/NewsType/Sports';
import WsjMagazine from './components/NewsType/WsjMagazine';
console.log(process.env )
const App = () => {
        return (
                <Router>

                        <Header />
                        <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/World" exact component={World} />
                                <Route path="/US" exact component={Us} />
                                <Route path="/Politics" exact component={Politics} />
                                <Route path="/Economy" exact component={Economy} />
                                <Route path="/Business" exact component={Business} />
                                <Route path="/Tech" exact component={Tech} />
                                <Route path="/Market" exact component={Market} />
                                <Route path="/Opinion" exact component={Opinion} />
                                <Route path="/LifeArts" exact component={LifeArts} />
                                <Route path="/RealEstate" exact component={RealEstate} />
                                <Route path="/Sports" exact component={Sports} />
                                <Route path="/WsjMagazine" exact component={WsjMagazine} />



                        </Switch>


                </Router>


        )
}
export default App