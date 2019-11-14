import React,{Component} from 'react'

import '../../src/assets/css/style.css'

import { Link } from 'react-router-dom';

class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:"qq",
            posts:props.posts,
            listId:props.posts
        }
    }
    enterLink(id,title,e){
        e.preventDefault();
        alert(`id:${id},title:${title}`)
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.posts.map((post) =>                          
                            <li key={post.id}>  
                                <Link to={
                                    { 
                                        pathname: `/blogitems/${post.id}`,
                                        state: {
                                            title: post.title,
                                            content: post.content,
                                        }
                                    }                              
                                }>{post.id}---{post.title}---{post.content}</Link>                        
                            </li>
                            /*<li onClick={(e)=>this.enterLink(post.id,post.title,e)}>                           
                                {post.id}---{post.title}---{post.content}                           
                            </li>*/
                        )
                    }
                </ul>
            </div>
            
        )
    }
}

export default Blog