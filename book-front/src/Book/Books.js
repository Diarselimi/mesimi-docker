import { Component } from "react";
import Book from "./Book";


class Books extends Component {
    
    constructor(books = []) {
        super()
        this.state = {books: books}
    }

    last() {
        return this.state.books.pop();
    }

    placeholder(items) {
        return(
            <div className="row">
                {Array.from(Array(items)).map((n) => (new Book()).Placeholder())}
            </div>
        );
    }

    render() {
        return (
            <div className='row'>
                {this.state.books.map((book) => book.render())}
            </div>
        )
    }
}

export default Books;