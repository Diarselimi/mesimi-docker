import { Component } from "react";

class Topic extends Component {
    constructor (title, totalReaders, totalComments, updatedAt, lastComment){
        super()
        this.state = {
            id: Math.floor((Math.random()+1) * 10),
            title: title, 
            totalReaders: totalReaders,
            totalComments: totalComments,
            updatedAt: updatedAt,
            lastComment: lastComment
        }
    }

    Placeholder() {
        return (
        <div className="col">
            <div className="card" aria-hidden="true">
                <div className="card-header">
                    <p className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </p>
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
        );}

    render() {
        return(
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        {this.state.title}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.lastComment}</p>
                        <a href="#" className="btn btn-primary">Open discussion</a>
                    </div>
                </div>
            </div>
        );
      }
}

export default Topic;