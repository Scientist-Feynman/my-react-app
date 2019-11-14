import React,{Component} from 'react';

import Returns from './Returns'
import ContentChild from './ContentChild'

class News extends Component{
    constructor(props){
        super(props);//继承父类方法
        this.state = {
            date: new Date(),
            site: "https://www.baidu.com",
            value: "hello reactjs",
            value_sel: "Google"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange_sel = this.handleChange_sel.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    handleChange(e){
        this.setState ({
            value: e.target.value
        })
    }
    handleChange_sel(e){
        this.setState({
            value_sel: e.target.value_sel
        });
    }
    handleSubmit(e){
        alert('Your favorite flavor is: ' + this.state.value_sel);
        e.preventDefault();
    }
    render(){
        var value = this.state.value;
        var value_sel = this.state.value_sel;
        console.log(value_sel)
        return(
            <div>
                <p>我是新闻</p>
                <p>本地时间：{this.state.date.toLocaleTimeString()}</p>
                <Returns site={this.state.site} name="新闻" />
                <hr/>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{this.state.value}</p>
                <hr/>
                
                <ContentChild myDataProp={value} updateStateProp={this.handleChange} />
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    选择您最喜欢的网站
                    <br />
                    <select value_sel={this.state.value_sel} onChange={this.handleChange_sel}>
                        <option value="baidubaike">百度百科</option>
                        <option value="wikipedia">维基百科</option>
                        <option value="zhihu">知乎</option>
                        <option value="quora">Quora</option>
                    </select>
                    </label>
                    <br />
                    <input type="submit" value="提交" />
                </form>
            </div>
            
        )
    }
} 

/*
News.propTypes = {
    date: PropTypes.string,
    site: PropTypes.string
}
*/


export default News