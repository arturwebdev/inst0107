import './MessengerChatForm.css'
import IMAGES from '../../images'
import { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addNewmessage } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
	const formRef = useRef(null)
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		const message = formRef.current[0].value
		dispatch(addNewmessage(message))
		formRef.current.reset()
	}
	return (
		<form ref={formRef} onSubmit={handleSubmit} >
			<div className='Chat-input'>
				<input type='text' placeholder='Message...'/>

				<label>
					<input type="submit" style={{display: 'none'}} />
					<img src={IMAGES.like} alt=''/>
				</label>

			</div>
		</form>
	)
}

export default memo(MessengerChatForm)
