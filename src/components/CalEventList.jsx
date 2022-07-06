import {useState} from 'react';
import CalEvent from './CalEvent';
import NewCalEventForm from './NewCalEventForm';

const CalEventList = (props) => {

	const [currentTab, setCurrentTab] = useState("selectedDate")
	const [selectedDateTabActive, setSelectedDateTabActive] = useState('is-active')
	const [allEventsTabActive, setAlleventsTabActive] = useState('')
	const [newEventTabActive, setNewEventTabActive] = useState('')

	const handleSelectedDateTab = () => {
		setCurrentTab("selected-date")
		setSelectedDateTabActive("is-active")
		setAlleventsTabActive("")
		setNewEventTabActive("")
	}
	const handleAllEventsTab = () => {
		setCurrentTab("all-events")
		setAlleventsTabActive("is-active")
		setSelectedDateTabActive("")
		setNewEventTabActive("")
	}
	const handleNewEventTab = () => {
		setCurrentTab("new-event")
		setNewEventTabActive('is-active')
		setAlleventsTabActive("")
		setSelectedDateTabActive("")
	}

	const renderSelectEvents = () => {
		return(
			<ul>
				{props.calEventList.map((calEvent) => {
					return (
						props.selectedDate === calEvent.date ? 
							<li key={calEvent.id}>
								<CalEvent calEvent={calEvent} handleUpdateCalEvent={props.handleUpdateCalEvent} handleDeleteCalEvent={props.handleDeleteCalEvent}/>
								<br />
							</li>
							:
							null
					)
				})}
			</ul>
		)
	}

	const renderAllEvents = () => {
		return (
			<ul>
				{props.calEventList.map((calEvent) => {
					return (
					<li>
						<CalEvent calEvent={calEvent} handleUpdateCalEvent={props.handleUpdateCalEvent} handleDeleteCalEvent={props.handleDeleteCalEvent}/>
						<br />
					</li>
					)
				})

				}
			</ul>
		)
	}

	return (
	<div>
		<div className='tabs'>
			<ul>
				<li className={selectedDateTabActive} onClick={handleSelectedDateTab}>
					<a>
						<span><i className="fas fa-image" aria-hidden="true"></i></span>
						<span>Events for {props.selectedDate}</span>
					</a>
				</li>
				<li className={allEventsTabActive} onClick={handleAllEventsTab}>
					<a>
						<span><i className="fas fa-image" aria-hidden="true"></i></span>
						<span>All Events</span>
					</a>
				</li>
				<li className={newEventTabActive} onClick={handleNewEventTab}>
					<a>
						<span><i className="fas fa-image" aria-hidden="true"></i></span>
						<span>Create New Event</span>
					</a>
				</li>
			</ul>
		</div>
		<div>

		</div>
			{ currentTab === "selected-date" ? renderSelectEvents() : null }
			{ currentTab === "all-events" ? renderAllEvents() : null }
			{ currentTab === "new-event" ? <NewCalEventForm handleCreateCalEvent={props.handleCreateCalEvent} todayDate={props.todayDate}/> : null }
	</div>
	
	)
}

export default CalEventList

