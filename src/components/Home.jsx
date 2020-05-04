import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Categories from './Categories';
import db from '../db/index';
import About from './pages/About'
import Contact from './pages/Contact';
import Category from './Category';
import Detail from './Detail';

class Home extends Component {
  state = {
    categories: [],
    places : [],
    selectedCategory : [],
    selectedId : '',
    selectedPlace : null,
    loading : false
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
          this.state.places.push({
            category_id: doc.data().category_id,
            id : doc.data().id,
            picture : doc.data().picture,
            name: doc.data().name
          });
        });
      });
  }

  getCategory = async id => {
    console.log("select category in home ", id);
    let res  = await this.state.places.filter(i => i.category_id === id);
    this.setState({ selectedCategory : res});
    console.log("selected category map places ", this.state.selectedCategory);
  };

  getPlace = async id => {
    this.setState({loading : true});
    let placeInfo = {};
    placeInfo = await this.state.places.filter(place => place.id === id);

    this.setState({ selectedPlace : placeInfo, loading: false});
    console.log("selected place ", this.state.selectedPlace);
  }

  render() {
    const { selectedPlace, selectedCategory, loading, categories } = this.state;

    let renderStruct = null;

    renderStruct = (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
                <Route exact path='/' render={(props) => (
                  <Fragment>
                    <Categories categories={categories} getCategory={this.getCategory} />
                  </Fragment>
                )}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/:categoryName' render={props => ( 
                  <Category { ...props } categoryItems={selectedCategory} />
                )}/>
                <Route exact path='/details/:id' render={props => ( 
                  <Detail { ...props } place={selectedPlace} getPlace={this.getPlace} loading={loading}/>
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
