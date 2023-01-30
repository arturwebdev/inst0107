import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost as addPostPosts } from '../../store/slices/posts/postsSlice';
import { addPost as addPostUsers, selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const dispatch = useDispatch()
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])


    const handleSubmit = (e) => {
        e.preventDefault()
        const { img: {value: img}, desc: {value: desc} } = formRef.current
        console.log(img, desc);
        const post = {
            id: new Date().getTime().toString(),
            name: currentUser.username.toLowerCase(),
            likesCount: Math.round(Math.random() * 3000 + 3000),
            timeAgo: Math.round(Math.random() * 8 + 2) + 'Minute Ago',
            postText: desc,
            img: img,
            comments: []
        }
        dispatch(addPostUsers(post))
        dispatch(addPostPosts(post))
        navigate('/')
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit} >
                <input name='img' type="text" placeholder='img' /> <br/><br/>
                <input name='desc' type="text" placeholder='description' /> <br/><br/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreatePost;
