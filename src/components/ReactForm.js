import React,{Component} from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'1233333',
            name:'',
            sex:'0',
            city:"",
            citys:[
                '北京','上海','广州'
            ],
            hobby:[
                {
                    'title':'吃饭',
                    'checked':true
                },
                {
                    'title':'读书',
                    'checked':true
                },
                {
                    'title':'写文章',
                    'checked':false
                }
            ],
            info:"124234"
        };
    }



    handleSubmit=(e)=>{
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);
    }
    handlename=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handlesex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handlecity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    hadlehobby=(key)=>{
        var hobby=this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            
            hobby:hobby
        })
    }
    handleinfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }


    render() {
        return (
            <div>
                {this.state.msg}
                <form onSubmit={this.handleSubmit}>
                    用户名：<input type="text" value={this.state.name} onChange={this.handlename} />
                    <br/>
                    <input type="radio" value="0" checked={this.state.sex==0} onChange={this.handlesex} />男
                    <br/>
                    <input type="radio" value="1" checked={this.state.sex==1} onChange={this.handlesex} />女
                    <br/>
                    居住城市：
                        <select value={this.state.city} onChange={this.handlecity}>
                            {
                                this.state.citys.map(function(value,key){
                                    return <option key={key}>{value}</option>
                                })
                            }
                            
                        </select>
                    <br/>
                    爱好：
                            {
                                this.state.hobby.map((value,key)=>{
                                    return (
                                        <span key={key}>
                                            <input type="checkbox" checked={value.checked} onChange={this.hadlehobby.bind(this,key)} /> {value.title} 
                                        </span>
                                    )
                                })
                            }
                    <br/>
                    备注：<textarea type="text" value={this.state.info} onChange={this.handleinfo} />
                    <br/>
                    <input type="submit" defaultValue="提交" />



                </form>
            </div>
        );
    }
}

export default ReactForm;