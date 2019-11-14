import React,{Component} from 'react'

import Returns from './Returns'
class Science extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>我是科学</div>
                <Returns name="科学" />
            </div>
        );
    }
}

export default Science;