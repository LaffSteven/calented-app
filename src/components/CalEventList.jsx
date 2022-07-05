import {useState} from 'react';



const CalEventList = (props) => {

	

	return (
		<ul>
			{props.calEventList.map((calEvent) => {
				return <li key={calEvent.id}>{calEvent.title}</li>
			})}
		</ul>
	)
}

export default CalEventList