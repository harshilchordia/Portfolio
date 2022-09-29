import React from "react";
import videofile from "../../Images/eyegazeWorking.mp4";
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";

const VideoApp = ({ videoURL }) => {
	console.log({ videoURL });
	return (
		<>
			<Video>
				<source src={videoURL} type="video/mp4" />
			</Video>
		</>
	);
};

export default VideoApp;
// class VideoApp extends Component {
// 	player = {};
// 	state = {
// 		video: {
// 			src: videofile,
// 			poster: "../../Images/eyegazeWorking.mov",
// 		},
// 	};

// 	onPlayerReady(player) {
// 		console.log("Player is ready: ", player);
// 		this.player = player;
// 	}

// 	onVideoPlay(duration) {
// 		console.log("Video played at: ", duration);
// 	}

// 	onVideoPause(duration) {
// 		console.log("Video paused at: ", duration);
// 	}

// 	onVideoTimeUpdate(duration) {
// 		console.log("Time updated: ", duration);
// 	}

// 	onVideoSeeking(duration) {
// 		console.log("Video seeking: ", duration);
// 	}

// 	onVideoSeeked(from, to) {
// 		console.log(`Video seeked from ${from} to ${to}`);
// 	}

// 	onVideoEnd() {
// 		console.log("Video ended");
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<VideoPlayer
// 					controls={true}
// 					src={this.state.video.src}
// 					poster={this.state.video.poster}
// 					width="720"
// 					height="420"
// 					onReady={this.onPlayerReady.bind(this)}
// 					onPlay={this.onVideoPlay.bind(this)}
// 					onPause={this.onVideoPause.bind(this)}
// 					onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
// 					onSeeking={this.onVideoSeeking.bind(this)}
// 					onSeeked={this.onVideoSeeked.bind(this)}
// 					onEnd={this.onVideoEnd.bind(this)}
// 				/>
// 			</div>
// 		);
// 	}
// }
// export default VideoApp;
