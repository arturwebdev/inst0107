import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { withLessMore } from '../../hoc/withLessMore'
import IMAGES from '../../images'
import Comments from '../Comments/Comments'
import CommentsForm from '../CommentsForm/CommentsForm'

function Post({id, img, name, likesCount, postText, timeAgo, comments, isShow, setIsShow}) {
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {!!postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>

            {
                !!comments.length && (
                isShow ?
                comments.map(comment => <Comments key={comment.id} username={comment.username} text={comment.text}/>)
                : <h2
                style={{cursor: 'pointer'}}  
                onClick={() => setIsShow(true)}
                >Show All Comments</h2>
                )
            }
        </div>
        <CommentsForm id={id} setIsShow={setIsShow}/>
    </div>
  )
}

export default memo(withLessMore(Post))