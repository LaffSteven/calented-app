import {useState} from 'react'
import EditCalEventForm from './EditCalEventForm'

const CalEvent = (props) => {

	const [expandCard, setExpandCard] = useState(false)
	const [currentTab, setCurrentTab] = useState("hidden")
	const [detailsTabActive, setDetailsTabActive] = useState("")
	const [editTabActive, setEditTabActive] = useState("")

	const handleDetailsTab = () => {
		setCurrentTab('details')
		setDetailsTabActive("is-active")
		setEditTabActive("")
	}
	const handleEditTab = () => {
		setCurrentTab('edit')
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
				{props.calEvent.title}
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
			{currentTab == "details" ? 
				<div className="content box">
					<p>{props.calEvent.date}</p>
					<p>{props.calEvent.time}</p>
					<p>{props.calEvent.description}</p>
					<button className='button is-info is-light' onClick={hideTab}>close</button>
				</div>
				:
				null
			}
			{currentTab == "edit" ? 
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