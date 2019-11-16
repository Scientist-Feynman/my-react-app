import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Maths from './Maths'
import Physics from './Physics'
import Returns from './Returns'

class Science extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>我是科学</div>
                <Router>
                    <ul>
                        <li><Link to="/science">物理</Link></li>
                        <li><Link to="/science/math">数学</Link></li>
                        <li><Link to="/science/chem">化学</Link></li>
                        <li><Link to="/science/bio">生命科学</Link></li>
                        <li><Link to="/science/geo">地学</Link></li>
                        <li><Link to="/science/cos">天文学</Link></li>
                        <li><Link to="/science/cs">计算机科学</Link></li>
                        <li><Link to="/science/his">历史学</Link></li>
                        <li><Link to="/science/psych">心理学</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/science" component={Physics} />
                        <Route path="/science/math" component={Maths} />
                    </Switch>
                </Router>
                <Returns name="科学" />
            </div>
        );
    }
}

export default Science;