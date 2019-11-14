import React,{Component} from "react"

import Returns from './Returns'
import TextList from './TextList'
import Blog from './Blog'

class Video extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            msg:"asa",
            number:["Orange","Peach","Apple","Strawberry","Grape"],
            posts:[
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                {id: 2, title: 'Installation', content: 'You can install React from npm.'},
                {id: 3, title: '数学：黎曼猜想的简单介绍', content: '黎曼猜想是........'},
                {id: 4, title: '物理：弦理论的发展史', content: '弦理论是物理学大统一理论的备选理论之一.....'}
            ]
        }
    }
    render(){
        return (
            <div>
                <p>我是视频</p>
                <Returns name="视频" />
                <TextList number={this.state.number} />
                <hr />
                <Blog posts={this.state.posts} />
            </div>
            
        )
    }
}
export default Video