import { Component } from "react";

class Book extends Component {
    constructor (title, description, cover, authors, topics = 0){
        super()
        this.state = {
            id: Math.floor((Math.random()+1) * 10),
            title: title, 
            description: description,
            cover: cover,
            authors: authors,
            topics: topics
        }
    }

    Placeholder() {
        return (
        <div className="col">
        <div className="card" aria-hidden="true">
            <img src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
                </p>
                <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
            </div>
        </div>
        </div>
        );
    }

    NewBook() {
        return(
            <div className="col d-flex align-items-stretch">
                <div className="card text-center">
                    <div className="card-body">
                        <img src={this.state.cover} className="rounded mx-auto d-block" height="200px" alt="Book cover" />
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.description}...</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div className="col d-flex align-items-stretch">
                <div className="card text-center">
                    <div className="card-body">
                        <img src={this.state.cover} className="rounded mx-auto d-block" height="200px" alt="Book cover" />
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.description}...</p>
                    </div>
                    <div className="card-footer text-center">
                        <a href={'/group/'+'123'} className="btn btn-primary btn-sm">Join reading group</a>
                    </div>
                </div>
            </div>
        );
      }
}

export default Book;