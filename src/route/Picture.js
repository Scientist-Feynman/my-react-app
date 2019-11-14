import React,{Component} from 'react'

import Returns from './Returns'
class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>我是图片</div>
                <Returns name="图片" />
            </div>
        );
    }
}

export default Picture;