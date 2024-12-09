import React from 'react'
import LeftSideBar from './LeftSideBar'
import Content from './Content'
import RightSideBar from './RightSideBar'
import Story from './Story'
import NewPost from './NewPost'
import Room from './Room'
import Post from './Post'
import AddFriend from './AddFriend'
import Profil from './Profil'
import ShortCut from './ShortCut'
import Pages from './Pages'
import Birthday from './Birthday'
import Contact from './Contact'
function Container() {
    return (
        <div className="wrapper">
            <div className="shortcuts">
            <Profil/>
            <ShortCut/>
            </div>

            <div className="posts">
            <Story/>
            <NewPost/>
            <Room/>
            <Post/>
            <AddFriend/>
            </div>

            <div className="    shortcuts-2">
            <Pages />
            <Birthday />
            <Contact />
            </div>
        
        
        </div>
    )
}

export default Container ;
