import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Footer from './components/footer/Footer';
import GlobalStyle from './globalStyle';
import Navbar from './components/navbar/Navbar';
import Home from './components/Routes/Home';
import { Spinner } from './globalStyle';

const World = lazy(() => import('./components/Routes/World'));
const Us = lazy(() => import('./components/Routes/Us'));
const Politics = lazy(() => import('./components/Routes/Politics'));
const Economy = lazy(() => import('./components/Routes/Economy'));
const Business = lazy(() => import('./components/Routes/Business'));
const Tech = lazy(() => import('./components/Routes/Tech'));
const Market = lazy(() => import('./components/Routes/Market'));
const Agriculture = lazy(() => import('./components/Routes/Agriculture'));
const Sports = lazy(() => import('./components/Routes/Sports'));
const Dalalstreet = lazy(() => import('./components/Routes/Dalalstreet'));
const Readnews = lazy(() => import('./components/Routes/Readnews'));
const Searchnews = lazy(() => import('./components/Routes/Searchnews'));

const App = () => {
        return (
                <>
                        <Router >
                                <GlobalStyle />
                                <Navbar />
                                <Suspense fallback={
                                <Spinner>
                                        <ClipLoader color='red' size={30} />
                                </Spinner>}>
                                        <Switch  >
                                                <Route path="/" exact component={Home} />
                                                <Route path="/World" exact component={World} />
                                                <Route path="/US" exact component={Us} />
                                                <Route path="/Politics" exact component={Politics} />
                                                <Route path="/Economy" exact component={Economy} />
                                                <Route path="/Business" exact component={Business} />
                                                <Route path="/Tech" exact component={Tech} />
                                                <Route path="/Market" exact component={Market} />
                                                <Route path="/Agriculture" exact component={Agriculture} />
                                                <Route path="/Sports" exact component={Sports} />
                                                <Route path="/Dalalstreet" exact component={Dalalstreet} />
                                                <Route path="/Readnews" exact component={Readnews} />
                                                <Route path="/Searchnews" exact component={Searchnews} />

                                        </Switch>
                                </Suspense>
                                <Footer />
                        </Router>
                </>
        )
}
export default App

