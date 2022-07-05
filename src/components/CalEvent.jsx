import {useState} from 'react'

const CalEvent = (props) => {

	const [expandCard, setExpandCard] = useState(false)
	const [curentTab, setCurrentTab] = useState('details')

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
		</header>
		<div className="card-content">
		<div className="tabs">
			<ul>
				<li className="is-active">
					<a>
						<span><i className="fas fa-image" aria-hidden="true"></i></span>
						<span>Details</span>
					</a>
					
				</li>
				<li>
					<a>
						<span><i className="fas fa-music" aria-hidden="true"></i></span>
						<span>Edit</span>
					</a>
				</li>
			</ul>
		</div>
			<div className="content box">
				<p>{props.calEvent.date}</p>
				<p>{props.calEvent.time}</p>
				<p>{props.calEvent.description}</p>
			</div>
		</div>
		<footer className="card-footer">
		</footer>
	</div>
	)
}

export default CalEvent