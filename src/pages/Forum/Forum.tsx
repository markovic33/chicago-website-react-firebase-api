import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import './forum.css';

const Forum = () => {
  return (
    <div className='forum_'>
        <CreatePost />
        <Post />
    </div>
  )
}

export default Forum