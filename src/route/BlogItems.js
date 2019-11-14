import React,{Component} from "react"

class BlogItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: 'I am a title',
            content: 'They are content!'
        };
    }
    render() {
        console.log(this.props)
        const {location} = this.props;
        return (
            <div>
                <h1>{location.state.title}</h1>
                <p>{location.state.content}</p>
            </div>
        );
    }
}

export default BlogItems;