import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {
        Home,
        Us,
        World,
        Politics,
        Economy,
        Business,
        Tech,
        Market,
        Opinion,
        LifeArts,
        RealEstate,
        Sports,
        WsjMagazine
} from './components/NewsType';


const App = () => {
        return (
               
                        <div>
                                <Router >

                                        <Header />
                                        <Switch  >
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
                                        <Footer />


                                </Router>

                        </div>
              

        )
}
export default App