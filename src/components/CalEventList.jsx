import {useState} from 'react';
import CalEvent from './CalEvent';
import moment from 'moment'

const CalEventList = (props) => {

	

	return (
		<ul className="box">
			{console.log(Date())}
			{props.calEventList.map((calEvent) => {
				return (
					<li key={calEvent.id}>
						<CalEvent calEvent={calEvent} />
					</li>
				)
			})}
		</ul>
	)
}

export default CalEventList