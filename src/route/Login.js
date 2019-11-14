import React,{Component} from 'react';

import Returns from './Returns'

class Login extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            isToggleOn: true,
            name:"hello world!"
        }
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }
    activateLasers(){
        alert("这是事件监听")
    }
    
    handleClick(e){
        this.setState(
            prevState => ({
                isToggleOn:!prevState.isToggleOn
            })
        );
    }

    preventPop(name,e){//事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }


    
    render(){
        return(
            <div>
                <p>我是登录</p>
                <Returns name="登录" />
                <br /><br />
                <button onClick={this.activateLasers}>事件监听</button>
                <br /><br />
                <button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
                <br /><br />
                <p>hello {this.state.name}</p>
                {/*{onClick={this.preventPop.bind(this,this.state.name)} */}
                {/*onClick={(e) => this.preventPop(this.state.name,e)} */}
                <a href="https://reactjs.org" onClick={(e) => this.preventPop(this.state.name,e)}>Click</a>
            </div>
        )
    }
}
export default Login