import React,{Component} from 'react'

class TextList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"",
            number:props.number
        };
    }
    
    render() {
        return (           
            <ul>
                {
                    this.state.number.map((number) =>
                        <li key={number.toString()} value={number}>
                            {number}
                        </li>
                    )
                }
            </ul>
        );
    }
}

export default TextList;