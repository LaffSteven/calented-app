import { useState } from 'react'

const EditCalEventForm = (props) => {

	const [updatedCalEvent, setUpdatedCalEvent] = useState({...props.calEvent})

	const handleChange = (event) => {
		setUpdatedCalEvent({...updatedCalEvent, [event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleUpdateCalEvent(updatedCalEvent)
	}

	const handleDelete = (event) => {
		// console.log(updatedCalEvent.id);
		console.log(`Deleted Event: "${updatedCalEvent.title}"`);
		props.handleDeleteCalEvent(updatedCalEvent)
	}

	return(
		<form onSubmit={handleSubmit}>
			<div className='columns is-gapless'>
				<div className='column'>
					<label htmlFor="title">Title: </label> <br />
					<label htmlFor="date">Date: </label> <br />
					<label htmlFor="time">Time: </label> <br />
					<label htmlFor="description">Description: </label> <br />
				</div>
				<div className='column is-two-thirds'>
					<input name='title' type="text" value={updatedCalEvent.title} onChange={handleChange} /> <br />
					<input name='date' type="date" value={updatedCalEvent.date} onChange={handleChange} /> <br />
					<input name='time' type="time" value={updatedCalEvent.time} onChange={handleChange} /> <br />
					<textarea name='description' className='textarea' type="text" value={updatedCalEvent.description} onChange={handleChange} /> <br />
				</div>
			</div>
			<div className='columns'>
				<div className='column is-one-third'>
					<input type="submit" className='button is-success is-light' value="Save" />
				</div>
				<div className='column is-one-third'>
					<button className='button is-warning' onClick={props.cancelEditing}>Cancel</button>
				</div>
				<div className='column is-one-third'>
					<button className='button is-danger' onClick={handleDelete}>DELETE</button>
				</div>
			</div>
		</form>
	)
}

export default EditCalEventForm