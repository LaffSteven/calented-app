const CalEvent = (props) => {
	return (
		<div className="box">
			<details>
				<summary>{props.calEvent.title}</summary>
					<p>{props.calEvent.date}</p>
					<p>{props.calEvent.time}</p>
					<p>{props.calEvent.description}</p>
			</details>
		</div>
	)
}

export default CalEvent