import React, { memo, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import {  selectPosts } from '../../store/slices/posts/postsSlice'
import { resetSearchTxt, selectSearchTxt } from '../../store/slices/searchTxt/searchTxtSlice'
import Loading from '../Loading/Loading'
import Post from '../Post/Post'

function Posts() {
    const dispatch = useDispatch()
    const {data: posts} = useSelector(selectPosts)
    const { isLoading: loading} = useSelector(selectPosts)
    const searchTxt = useSelector(selectSearchTxt)
    
    useEffect(() => {
        if(!posts.length){
            dispatch(fetchPosts())
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch(resetSearchTxt())
        }
    }, [])


    const filteredPosts = useMemo(() => {
        return [...posts.filter(post => post.name.includes(searchTxt.toLowerCase()))]
    }, [posts, searchTxt])


    return (
    <>
        
        
        {
            loading ?
            <Loading />
            :
            filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments} />)
        }
    </>
  )
}

export default memo(Posts)