import React, { Component } from "react";
import "./App.css";
import cats from "./mockCats";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  }

 createNewCat = (theNewCatObject) => {
}
updateCat = (cat, id) => {
}

  render() {
    console.log(this.state.cats)
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
          <Route path="/catshow/:id" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatShow cat={cat} />
          }}/>
          <Route path="/catnew" render={() => {
            return <CatNew createNewCat={this.createNewCat} />
          }} />
          <Route path="/catedit" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatEdit updateCat={this.updateCat} cat={cat} />
          }} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;