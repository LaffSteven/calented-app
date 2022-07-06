import {useState} from 'react';
import CalEvent from './CalEvent';
import moment from 'moment'

const CalEventList = (props) => {

	return (
	<ul className="box">
		<h3 className='subtitle'>Today's Events</h3>
		{props.calEventList.map((calEvent) => {
			return (
				<li key={calEvent.id}>
					<CalEvent calEvent={calEvent} handleUpdateCalEvent={props.handleUpdateCalEvent} handleDeleteCalEvent={props.handleDeleteCalEvent}/>
					<br />
				</li>
			)
		})}
	</ul>
	)
}

export default CalEventList