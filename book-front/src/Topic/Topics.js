import { Component } from "react";
import Topic from "./Topic";


class Topics extends Component {
    
    constructor(topics = []) {
        super()
        this.state = {topics: topics}
    }

    placeholder(items) {
        return(
            <div className="row">
                {Array.from(Array(items)).map((n) => (new Topic()).Placeholder())}
            </div>
        );
    }

    render() {
        return (
            <div className='row'>
                {this.state.topics.map((topic) => topic.render())}
            </div>
        )
    }
}

export default Topics;