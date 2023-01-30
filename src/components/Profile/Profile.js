import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delPost as delPostPosts } from '../../store/slices/posts/postsSlice';
import { delPost as delPostUsers, selectUsers } from '../../store/slices/users/usersSlice';
import './Profile.css'


const Profile = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(selectUsers)
    const navigate = useNavigate()


    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])


    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={currentUser?.avatar} alt=""/>
                    </div>
                    {/* <div style={{textAlign: 'left'}}> */}
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">{currentUser?.username}</h1>
                            <button className="btn profile-edit-btn">Edit Profile</button>
                            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
        
                        </div>
                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">{currentUser?.posts.length}</span> posts</li>
                                <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                                <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                            </ul>
                        </div>
                        <div className="profile-bio">
                            <h3>{currentUser?.name}</h3>
                            <p>{currentUser?.bio}</p>
                        </div>

                    {/* </div> */}
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
        {
            currentUser?.posts.map(el => (
                <div key={el.id} className="gallery-item">
                    <img src={el.img} className="gallery-image" alt=""/>
                    <div className="gallery-item-info">
                        <span onClick={() => {dispatch(delPostPosts(el.id)); dispatch(delPostUsers(el.id))}} className='delPost'>X</span>
                        <ul>
                            <li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
                            <li className="gallery-item-comments"><span >Comments</span> {el.comments.length}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    
        </>
    );
}

export default memo(Profile)
