import {useState} from 'react'

const NewCalEventForm = (props) => {

	let emptyCalEvent = {
		date: props.todayDate,
		time: "",
		title: "",
		description: "",
	}

	const [newCalEvent, setNewCalEvent] = useState(emptyCalEvent)

	const handleChange = (event) => {
		setNewCalEvent({...newCalEvent, [event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// console.log(newCalEvent);
		props.handleCreateCalEvent(newCalEvent)
		setNewCalEvent(emptyCalEvent)
	}

	return (
	<form onSubmit={handleSubmit}>
		<h2 className="subtitle">New Calendar Event</h2>
		<div className="field">
			<label htmlFor='title' className="label">Title</label>
			<div className="control">
				<input id='title' name='title' className="input" type="text" placeholder="Title" onChange={handleChange} />
			</div>
		</div>
		<div className="field">
			<label htmlFor='date' className="label">Date</label>
			<div className="control">
				<input id='date' name='date' className="input" type="date" placeholder="" onChange={handleChange} />
			</div>
		</div>
		<div className="field">
			<label htmlFor='time' className="label">Start Time</label>
			<div className="control">
				<input id='time' className="input" name='time' type="time" onChange={handleChange} />
			</div>
		</div>
		<div className="field">
			<label htmlFor='description' className="label">Description</label>
			<div className="control">
				<textarea id='description' name='description' className='textarea' type="text" placeholder='Description' onChange={handleChange} />
				{/* <input id='description' className="input" type="text" placeholder="Enter description here" onChange={handleChange} /> */}
			</div>
		</div>
		<div className="field">
			<div className="control">
				<input id='submit' className="button is-success is-light" type="submit" value="Save New Event" onClick={handleSubmit} />
			</div>
		</div>
	</form>
	)
}

export default NewCalEventForm