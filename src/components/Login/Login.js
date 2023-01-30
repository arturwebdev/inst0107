import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import './Login.css'
function Login() {
  const dispatch = useDispatch()
  const { currentUser, data: users } = useSelector(selectUsers)

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers())
    }
  }, [])

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(toggleCurrentUser({
      login: formRef.current[0].value,
      password: formRef.current[1].value,
    }))
  } 

  return (
    <div className='Login'> 
     <div className='container'>
     <div className='LogDiv'>
            <h1>Instagaram</h1>
            <form ref={formRef} onSubmit={handleSubmit} className='formLog'>
                <input defaultValue={'bret'} className='logInput' type='text' placeholder='Phone number, username, or email' ></input><br/>
                <input defaultValue={'gwenborough'} type='text' placeholder='Password'></input><br/>
                <button className='logBtn'>Log in</button>
            </form>
            <div>
                <div className='Or-text'>
                <p >OR</p>
                </div>
                <p className='FB-text'>Log in with Facebook</p>
                <p className='Pass-text'>Forgot Password?</p>
            </div>            
        </div>
        <div className='SignIn'>
            <p>Don't have an account? <span>Sign up</span> </p>
        </div>
     </div>
        
    </div>
  )
}

export default Login