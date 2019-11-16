import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css'

export default () => {
    return (
        <div>
            <h1>主页</h1>
            <nav>
                <ul id="floatnavigates">
                    <li className="textsize"><Link to="/login">登录</Link></li>
                    <li className="textsize"><Link to="/news">新闻</Link></li>
                    <li className="textsize"><Link to="/video">视频</Link></li>
                    <li className="textsize"><Link to="/picture">图片</Link></li>
                    <li className="textsize"><Link to="/science">科学</Link></li>
                    <li className="textsize"><Link to="/music">音乐</Link></li>
                </ul>
            </nav>
            
        </div>
    )
}