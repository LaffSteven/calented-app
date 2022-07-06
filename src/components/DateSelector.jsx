import {useState} from 'react'
import moment from 'moment'

const DateSelector = (props) => {

	const handleChange = (event) => {
		props.setSelectedDate(event.target.value)
	}
	
	return (
		<div className='card has-background-primary-light'>
			<header className='card-header'>
				<h4 className='card-header-title'>Select Date to view events</h4>
			</header>
			<div className='card-content'>
				<input name='date' type="date" required pattern='\d{4}-\d{2}-\d{2}'onChange={handleChange}/>
			</div>
			<footer className='card-footer'>
				<div className='card-footer-item'>{moment(props.selectedDate).format('dddd MMM Do YYYY')}</div>
			</footer>
		</div>
	)
}

export default DateSelector