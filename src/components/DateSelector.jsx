import {useState} from 'react'

const DateSelector = () => {
	
	const [selectDate, setSelectDate] = useState("")

	const handleChange = (event) => {
		setSelectDate(event.target.value)
	}
	
	return (
		<div className='card'>
			<header className='card-header'>
				<h4 className='card-header-title'>Select Date</h4>
			</header>
			<div className='card-content'>
				<input name='date' type="date" required pattern='\d{4}-\d{2}-\d{2}'onChange={handleChange}/>
			</div>
			<footer className='card-footer'>
				<div className='card-footer-item'>{selectDate}</div>
			</footer>
		</div>
	)
}

export default DateSelector