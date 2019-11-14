import React,{Component} from 'react';
import '../assets/css/C3.css';

class C3 extends Component{
    render(){
        return (
            <div className="c3">
                Hello,我是在src/myselfComponent目录下的C3.js文件中的C3组件<br/>我引入了相同目录下的 C3.css 文件，用来给我包含的文字设为粗体黄色
            </div>
        );
    }
}

export default C3;