import React ,{Component} from 'react'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    addData=(e)=>{
        if(e.keyCode==13){
            let title=this.refs.title.value;
            let tempList=this.state.list;
            tempList.push({
                title:title,
                checked:false
            });
            this.setState({
                list:tempList
            });
            this.refs.title.value="";
        }
    }

    checkboxChange=(key,val)=>{
        let tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        });
    }

    removeData=(key)=>{
        let tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        });
    }
    
    render() {
        return (
            <div>
                <header className="title">TodoList: <input ref="title" onKeyUp={this.addData} /></header>               
                <hr/>

                <h2>待办事项</h2>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return(
                                    <li>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key,value.checked)} />
                                        {value.title}
                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>


                <h2>已进行事项</h2>
                <hr/>

                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                return(
                                    <li>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)} />
                                        {value.title}
                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default ToDoList;