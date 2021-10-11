import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";

class App extends Component {
  render() {
    return (
        <Router>
            <Header />
            <div className="page">
                <Switch>
                    <Route path="/playlist/:genre">
                        <PlaylistPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    );
  }
}

export default App;
