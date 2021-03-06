import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'

import Home from './React_components/Home'
import search from './React_components/search'

class BooksApp extends React.Component {
  
    
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
   
    showSearchPage: false
      */
  


  


  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={search} />
       
      </div>
    );



  }
}

export default BooksApp

/*

    return (
      <div className="app">
        
         <Home/>
        
      </div>
    )
*/