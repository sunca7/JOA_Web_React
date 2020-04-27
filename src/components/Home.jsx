import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Categories from './Categories';
import db from '../db/index';
import About from './pages/About'
import Contact from './pages/Contact';

class Home extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    const { categories } = this.state;

    db.collection("categories")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => (
          categories.push({
            id: doc.id,
            name: doc.data().name,
            order: doc.data().order,
            picture: doc.data().picture,
            type : doc.data().type
          })
      ))
      this.setState({ categories })
      });
    console.log(categories);
  }

  render() {
    let renderStruct = null;

    renderStruct = (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
                <Route exact path='/' render={(props) => (
                  <Fragment>
                    <Categories categories={this.state.categories} />
                  </Fragment>
                )}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
          </div>
        </div>
      </Router>
    )

    return renderStruct;
  }
}

export default Home;
