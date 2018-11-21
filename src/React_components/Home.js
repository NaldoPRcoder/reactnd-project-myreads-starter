import React, { Component } from 'react'
import Shelf from './Shelf';

const shelf = [
    {
      'id':'Shelf1',
      'name':'Currently Reading'
    },
    {
      'id':'Shelf2',
      'name':'Want to Read'
    },
    {
      'id':'Shelf3',
      'name':'Read'
    }
  ]
const Book = [
    {
      "title":'To Kill a Mockingbird',
      "author":'Harper Lee',
      "backgroundimage":'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
    }
  ]

class Home extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf bookshelf={shelf}/>
                        
                    </div>
                </div>
            </div>
        )
    } 
}

export default Home;