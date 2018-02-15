import React from 'react';

class Audio extends React.Component {
    render() {
        return(
            <div className="content-section">
            	<div className="title">Play Audio</div>
            	<div className="content"> 
            		<audio id="audio1" controls src="https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg" ref="audio"></audio>
            		<audio id="audio2" controls src="https://static.bandlab.com/soundbanks/previews/synth-organ.ogg" ref="audio"></audio>
            	</div>
            </div>
        );
    }
}

export default Audio;