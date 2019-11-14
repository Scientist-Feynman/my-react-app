import React,{Component} from 'react'

import Returns from './Returns'
class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>我是音乐</div>
                <Returns name="音乐" />
            </div>
        );
    }
}

export default Music;