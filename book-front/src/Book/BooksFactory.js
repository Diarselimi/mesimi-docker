import { Component } from "react";
import Books from "./Books";
import Book from "./Book";


class BooksFactory extends Component {
    
    constructor(props) {
        super(props);
    }

    static create(jsonData) {
        if ('state' in jsonData) {
            jsonData = jsonData.state;
        }

        return (
            new Books(
                jsonData.map(
                    (b) => new Book(b.title, b.description, b.cover, b.authors, b.topics)
                )
            )
        ); 
    }

    static createPlaceholder(numberOfBooks = 5) {
        return (new Books()).placeholder(numberOfBooks);
    }

    render(props) {

        console.log('Factory',this.props.newBook,'Factory');
        if (this.props.newBook && this.props.newBook !== null) {
            return this.constructor.create([this.props.newBook]).last().NewBook();
        }

        if (this.props.newBook === null) {
            return this.constructor.createPlaceholder(1);
        }

        if (this.props.book && this.props.book !== null) {
            return this.constructor.create([this.props.book]).last().render();
        }

        if (this.props.book === null) {
            return this.constructor.createPlaceholder(1);
        }        

        if (this.props.books && this.props.books.length > 0) {
            return this.constructor.create(this.props.books).render();
        }

        return this.constructor.createPlaceholder(5);
    }

}

export default BooksFactory;