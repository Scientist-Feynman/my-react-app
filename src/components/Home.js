import React from 'react';

import C3 from './C3.js';
import logo from '../assets/images/孙铱1.jpg';
import logo01 from '../assets/images/陈瑶.jpeg';

import '../assets/css/Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'logo':'',
            list:['我是数据1','我是数据2','我是数据3','我是数据4'],
            list2:[<h5 key='1'>我是孙铱</h5>,<h5 key='2'>我是胡冰卿</h5>,<h5 key='3'>我是陈瑶</h5>],
            massage:"我是一个信息",
            msg:"this is a massage",
            userName:"胡冰卿"
        }
        //第二种改变this指向的方法
        this.getMsg=this.getMsg.bind(this);
    };
    run(){
      alert("我是陈瑶&胡冰卿");
    }
    
    getData(){
      alert(this.state.massage);
    }
    getMsg(){
      alert(this.state.msg);
    }
    getName=()=>{
      alert(this.state.userName);
    }
    setData=()=>{
      this.setState({
        userName:"陈瑶"
      })
    }
    setMsg=(str)=>{
      this.setState({
        userName:str
      })
    }

    run1=(event)=>{
      event.target.style.background="yellow";
      alert(event.target.getAttribute("aid"));
    }
    inputChange=(e)=>{
      console.log(e.target.value);
      this.setState({
        userName:e.target.value
      })
    }
    getInput=()=>{
      alert(this.state.userName);
    }

    render(){
      let listData = this.state.list.map(function(value,key){
          return <li key={key}>{value}</li>
      })
      return (
          <header className="App-header">
            <img src={logo} className="p1" alt="logo" />
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563154266&di=37d38efb279b5217a13ff75ce7521d19&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn01%2F82%2Fw1633h2449%2F20180808%2Fbbc8-hhkuskt4101000.jpg" className="p1" alt="logo" />
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563156580&di=30ecf62f9ace509975363787e5568143&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180305%2Fc427c677848f40b3b606e83e44c93cda.jpeg" className="p1" alt="logo" />
            <img onClick={this.run} src={logo01} className="p1" alt="logo" />

            <br/>
            <button onClick={this.getData.bind(this)}>获取数据的第一种方法</button>
            <br/>
            <button onClick={this.getMsg}>获取数据的第二种方法</button>
            <br/>
            <button onClick={this.getName}>获取数据的第三种方法</button>
            <br/>
            <button onClick={this.setData}>改变state的值</button>
            <br/>
            <button onClick={this.setMsg.bind(this,'张予曦')}>执行方法传值</button>
            <br/>
            <button aid='124' onClick={this.run1}>点击事件</button>
            <br/>
            <h5>表单事件</h5>
            <input onChange={this.inputChange} />
            <button onClick={this.getInput}>获取input的值</button>
              {this.state.list2}           
            <a className="App-link" href="https://baike.baidu.com/" target="_blank" rel="noopener noreferrer">
              欢迎来到百度百科
            </a>
            <a className="App-link" href="https://baike.baidu.com/" target="_blank" rel="noopener noreferrer">
              欢迎来到维基百科
            </a>
            <a className="App-link" href="https://www.zhihu.com/" target="_blank" rel="noopener noreferrer">
              欢迎来到知乎
            </a> 
            <hr/>
            
            <ul>
              {listData}
            </ul>
            <p>
              你可以在<code>src/App.js</code> 文件中修改。
            </p>
            <C3 />
            {/*<a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>*/}
          </header>
      );
    }
}

export default Home;