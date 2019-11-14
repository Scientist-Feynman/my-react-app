import React, { Component } from 'react';

class ContentChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:''
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        // 使用原生的 DOM API 获取焦点
        this.refs.myContent.focus();
    }
    render() {
        // 当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <h4>在子组件上使用表单</h4>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} ref="myContent" />
                <p>{this.props.myDataProp}</p>
                <div>
                    <h4>ref的使用</h4>
                    <input type="button" value="点我输入框获取焦点" onClick={this.handleClick} />
                </div>
           </div>
        );
    }
}

export default ContentChild;