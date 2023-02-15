const { ipcRenderer } = require('electron');

ipcRenderer.on('SET_SOURCE', async (event, source) => {
	try {
		console.log('THIS PRELOAD SCRIPT WORKING?');
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				minWidth: 160,
				maxWidth: 160,
				minHeight: 160,
				maxHeight: 160,
			},
		});
		handleStream(stream);
	} catch (e) {
		handleError(e);
	}
});

function handleStream(stream) {
	const video = document.querySelector('video');
	console.log('VIDEO STREAM PLAYER');
	video.srcObject = stream;
	video.onloadedmetadata = (e) => video.play();
}

function handleError(e) {
	console.log(e);
}

const addVideoAvatar = (selector) => {
	const element = document.querySelector(selector);
	if (element) {
		const el = document.createElement('h1');
		const videoEl = document.createElement('video');
		videoEl.id = 'videoAvatar';
		el.id = 'controlPanel';
		videoEl.style.width = '160px';
		videoEl.style.height = '160px';
		videoEl.style.bottom = '5px';
		videoEl.style.left = '10px';
		videoEl.style.position = 'fixed';
		videoEl.style.objectFit = 'cover';
		videoEl.style.borderRadius = '100%';

		el.innerText = 'THIS IS PRELOAD!!!!!';
		// element.insertBefore(el, element.firstChild);
		// element.insertBefore(videoEl, element.firstChild);
		// element.appendChild(videoEl);
		element.appendChild(videoEl);
	}
};

window.addEventListener('DOMContentLoaded', () => {
	addVideoAvatar('body');
	// console.log('FIRST CHILD: ', document.querySelector('body').firstChild);
});
