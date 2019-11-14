import React,{Component} from 'react'

class LifeCycleFun extends Component {
    //周期函数初始阶段
    constructor(props) {
        super(props);
        this.state = {  }
    }
    /*
    挂载阶段
        componentWillMount--组件挂载到DOM前调用，且只会被调用一次，在这边调用this.setState不会引起组件重新渲染，
        也可以把写在这边的内容提前到constructor()中，所以项目中很少用。
        render--
        componentDidMount--组件挂载到DOM后调用，且只会被调用一次。
    */
    componentWillMount(){
        console.log('组件将要挂载');
    }
    componentDidMount(){
        console.log('组件挂载完成');
    }

    /**
     * 更新阶段
     * 
     */



    /**
     * 卸载阶段
     * componentWillUnmount--可以在这里执行一些清理工作，比如清楚组件中使用的定时器，
       清楚componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏
     */
    componentWillUnmount(){
        console.log('组件销毁');
    }

    /**
     * react-16新增 生命周期函数
     * 
     */

    
    

    //自定义方法
    showData=()=>{
        

    }



    render() {
        return (
            <form>
                <button>显示生命周期组件</button>
            </form>
        );
    }
}

export default LifeCycleFun;