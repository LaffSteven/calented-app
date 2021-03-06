import {useState} from 'react'
import moment from 'moment'
import EditCalEventForm from './EditCalEventForm'

const CalEvent = (props) => {

	const [expandCard, setExpandCard] = useState(false)
	const [currentTab, setCurrentTab] = useState("hidden")
	const [detailsTabActive, setDetailsTabActive] = useState("")
	const [editTabActive, setEditTabActive] = useState("")

	const handleDetailsTab = () => {
		currentTab !== "details" ? setCurrentTab("details") : hideTab()
		setDetailsTabActive("is-active")
		setEditTabActive("")
	}
	const handleEditTab = () => {
		currentTab !== "edit" ? setCurrentTab("edit") : hideTab()
		setEditTabActive("is-active")
		setDetailsTabActive("")
	}

	const hideTab = () => {
		setCurrentTab("hidden")
		setDetailsTabActive("")
	}

	

	return (
	<div className="card">
		<header className="card-header">
			<p className="card-header-title">
				{moment(props.calEvent.date).format('l')} | {props.calEvent.title}
			</p>
			<button className="card-header-icon" aria-label="more options" onClick={() => setExpandCard(!expandCard)}>
				<span className="icon">
					<i className="fas fa-angle-down" aria-hidden="false"></i>
				</span>
			</button>
			<div className="tabs">
				<ul>
					<li className={detailsTabActive} onClick={handleDetailsTab}>
						<a>
							<span><i className="fas fa-image" aria-hidden="true"></i></span>
							<span>Details</span>
						</a>
					</li>
					<li className={editTabActive} onClick={handleEditTab}>
						<a>
							<span><i className="fas fa-music" aria-hidden="true"></i></span>
							<span>Edit</span>
						</a>
					</li>
				</ul>
			</div>
		</header>

		{currentTab !== "hidden" ?
			<div className="card-content">
			{currentTab === "details" ? 
				<div className="content box has-background-warning-light is-size-5">
					<p>{moment(props.calEvent.date).format('MMMM Do YYYY')}</p>
					<p>{props.calEvent.time}</p>
					<p className='box is-shadowless'>{props.calEvent.description}</p>
					<button className='button is-info is-light' onClick={hideTab}>close</button>
				</div>
				:
				null
			}
			{currentTab === "edit" ? 
				<div className='content box'>
				<EditCalEventForm calEvent={props.calEvent} handleUpdateCalEvent={props.handleUpdateCalEvent} handleDeleteCalEvent={props.handleDeleteCalEvent} cancelEditing={hideTab}/>
				</div>
				:
				null
			}
			</div>
			:
			null
		}
	</div>
	)
}

export default CalEvent