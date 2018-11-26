import React from "react"


class BookChanger extends React.Component {
    state = {
        value:[]
    }

    
    
    bookCategory(event, value) {
        value === this.props.category;
        this.setState({value: event.target.value});
    }

    handleChange(event) {
        

    }

    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.category} onChange={this.bookCategory}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookChanger;