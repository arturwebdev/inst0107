import React, { memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
function CommentsForm({id, setIsShow}) {
    const dispatch = useDispatch()
    const commentRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    const handleSubmit = (e) => {
        e.preventDefault()
        const text = commentRef.current[0].value

        dispatch(addComment({id, text, username: currentUser.username}))

        commentRef.current.reset()
    }

  return (
    <form ref={commentRef} onSubmit={handleSubmit} >    
            <div className="comment-wrapper">    
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={() => setIsShow(true)} type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
                </div>    
    </form>
      
  )
}

export default memo(CommentsForm)