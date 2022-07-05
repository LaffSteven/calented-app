import {useState} from 'react';
import CalEvent from './CalEvent';
import moment from 'moment';


const CalEventList = (props) => {

	

	return (
		<ul>
			console.log(moment());
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