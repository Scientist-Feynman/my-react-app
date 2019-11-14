import React,{Component} from 'react';

class C2_title extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date:new Date()
        };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <p>这是子组件：{this.props.name}</p>
                <h4>现在时间是：{this.state.date.toLocaleTimeString()}。</h4>
            </div>
        );
    }
}

export default C2_title;