import React,{Component} from 'react';
import '../assets/css/C2.css';

import C2_title from './C2_child/C2_title.js';

class C2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是父组件的信息'
        }
    }




    render(){
        return (
            <div>
                <C2_title name={this.state.msg} />
                <div className="c2">
                    Hello,我是在src/myselfComponent目录下的C2.js文件中的C2组件 我引入了相同目录下的 C2.css 文件，用来给我包含的文字设为蓝色
                </div>
            </div>
            
        );
    }
}

export default C2;