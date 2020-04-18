import React from 'react';
import DrumPad from './DrumPad';
import '../main.css';

const musicData = [
	{
		id: 'Cymbal 1', letter: 'Q', src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
	},
	{
		id: 'Cymbal 2', letter: 'W', src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
	},
	{
		id: 'Drum ', letter: 'E', src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
	},
	{
		id: 'Floor Tom ', letter: 'A', src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
	},
	{
		id: 'Kick 1', letter: 'S', src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
	},
	{
		id: 'Kick 2', letter: 'D', src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
	},
	{
		id: 'Rim Shot', letter: 'Z', src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
	},
	{
		id: 'Snare 1', letter: 'X', src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
	},
	{
		id: 'Snare 2', letter: 'C', src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
	}
]

class App extends React.Component {
  constructor() {
	super();
	
	this.state = {
		display: 'Click or Press Key'
	}

  }

  handleDisplay = display => this.setState({ display })

  render() {
  
    return(
      <div id="drum-machine">
        <div id="display">{ this.state.display }</div>
		<div className="buttons">
		{ musicData.map((sound, key) => (
          <DrumPad 
            id={sound.id}
            letter={sound.letter}
			src={sound.src}
			handleDisplay={this.handleDisplay}
          />
        )) }
		</div>
      </div>
    );
  }
}

export default App;

