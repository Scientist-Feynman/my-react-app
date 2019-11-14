import React,{Component} from 'react';
import '../assets/css/SetTime.css';

class SetTime extends Component{
    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick(){
    render(
        <SetTime date={new Date()} />
    );
}
setInterval(tick,1000);

export default SetTime;