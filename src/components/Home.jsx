import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Categories from './Categories';
import db from '../db/index';
import About from './pages/About'
import Contact from './pages/Contact';
import Category from './Category';

class Home extends Component {
  state = {
    categories: [],
    places : [],
    selectedCategory : []
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
    
      db.collection("places")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.state.places.push(doc.data());
        });
      });
  }

  selectCategory = async id => {
    console.log("select category in home ", id);
    let res  = await this.state.places.filter(i => i.category_id === id);
    this.setState({ selectedCategory : res});
    console.log("selected category map places ", this.state.selectedCategory);
  };

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
                    <Categories categories={this.state.categories} selectCategory={this.selectCategory} />
                  </Fragment>
                )}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/:categoryName' render={props => ( 
                  <Category {...props} categoryItems={this.state.selectedCategory}/>
                )}/>
            </Switch>
          </div>
        </div>
      </Router>
    )

    return renderStruct;
  }
}

export default Home;
