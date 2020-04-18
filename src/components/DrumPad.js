import React from 'react';

class DrumPad extends React.Component {

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
		window.focus();
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	}

	handleKeyDown = e => {
		if(e.keyCode === this.props.letter.charCodeAt()) {
			this.audio.play();
			this.audio.currentTime = 0;
			this.props.handleDisplay(this.props.id);
		}
	}

	handleClick = () => {
		this.audio.play();
		this.audio.currentTime = 0;
		this.props.handleDisplay(this.props.id);
	}

	render() {
		return(
			<div 
				className="drum-pad" 
				id={this.props.id}
				onClick={this.handleClick}>
				<p>{this.props.letter}</p>
				<audio 
					ref={ref => this.audio = ref}
					src={this.props.src} 
					id={this.props.letter} 
					className="clip"
					>
				</audio>
			</div>
		);
	}
}

export default DrumPad;
