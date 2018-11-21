import React, { Component } from 'react'
import Book from './Book'



class Shelf extends Component {
    render() {
        return(
          <div>
            {this.props.bookshelf.map((shelf) =>(
              < div key={shelf.id} className="bookshelf">
                <h2  className="bookshelf-title">
                  {this.props.bookshelf.name}
                </h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li> 
                    <Book bookInfo={Book}/>
                  </li>
                </ol>
              </div>
              </div>
            ))}
          </div>
        )
    }
  }

export default Shelf;