import { Component } from "react";
import Topics from "./Topics";
import Topic from "./Topic";


class TopicsFactory extends Component {
    
    constructor(props) {
        super(props);
    }

    static create(jsonData) {
        return (
            new Topics(
                jsonData.map(
                    (b) => new Topic(
                        b.title,
                        b.totalReaders,
                        b.totalComments,
                        b.updatedAt,
                        b.lastComment
                    )
                )
            )
        ).render(); 
    }

    static createPlaceholder() {
        return (new Topics()).placeholder(5);
    }

    render(props) {

        if (this.props.topics.length > 0) {
            return this.constructor.create(this.props.topics);
        }

        return this.constructor.createPlaceholder();
    }

}

export default TopicsFactory;