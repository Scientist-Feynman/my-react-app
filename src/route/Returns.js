import React,{Component} from 'react'
import { Link } from 'react-router-dom';


class Returns extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:""
        }
    }
    render(){
        return(
            <Link to="/">【返回首页】- 这是从{this.props.name}页传入数据 - 网址：{this.props.site}</Link>
        )
    }
}
export default Returns