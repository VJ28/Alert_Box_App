import React from 'react';

	let alertTypes={
		1: "Success",
		2: "Warning",
		3: "Error"
	}
class AlertCard extends React.Component {

	constructor(props){
		super(props);
		this.props = props;
	}
	render() {
		let heading = alertTypes[this.props.heading];
		return (
			<div className="card-container">
				<div className={"left-box "+heading}></div>
				<div className="text-container">
					<div className="alert-heading">{heading}</div>
					<div className="alert-text">{this.props.inputText}</div>
				</div>
				<div className="btn-container">
					<button className="btn" onClick={this.props.onDeleteCard}>Dismiss</button>
				</div>
			</div>
		)
	}
}

export default AlertCard;