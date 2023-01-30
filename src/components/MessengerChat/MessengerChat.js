import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const {currentUser: {messages}} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
		{
      messages.map(message => (
        <div key={message.id}>
          <h1>{message.question}</h1>
          <h1>{message.answer}</h1>
        </div>
      ))
    }
	 </div>
  )
}

export default memo(MessengerChat)
