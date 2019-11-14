import React,{Component} from 'react';
import '../assets/css/C1.css';

//模拟数据的双向绑定
class C1 extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }

    render(){
        return (
            <div>
                <div>
                    <input value={this.state.value} onChange={this.handleChange.bind(this)} />
                    <p>{this.state.value}</p>
                </div>
                <div className="c1">
                    Hello,我是在src/myselfComponent目录下的C1.js文件中的C1组件 我引入了相同目录下的 C1.css 文件，用来给我包含的文字设为红色
                </div>
            </div>
        );
    }
}



export default C1;