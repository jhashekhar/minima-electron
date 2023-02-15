import React from 'react';
import './App.css';

function RecordingControl() {
	const [screenRecordingBtnText, setScreenRecordingBtnText] =
		React.useState('Start Recording');

	// screen recording feature
	const handleStartRecording = (event: React.MouseEvent) => {
		if (screenRecordingBtnText === 'Start Recording')
			setScreenRecordingBtnText('Stop Recording');
		else setScreenRecordingBtnText('Start Recording');
	};

	const handleAnnotate = () => {};

	return (
		<div className="fixed ml-64 mb-16 grid grid-cols-4 gap-3 sm:bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0">
			<div className="col-span-1">
				<button
					className="bg-purple-500 shadow-lg rounded-md px-4 py-2 text-white hover:bg-purple-600 active:bg-purple-600 focus:outline-none focus:shadow-outline"
					onClick={handleStartRecording}
				>
					{screenRecordingBtnText}
				</button>
			</div>
			<div className="col-span-1">
				<button
					className="bg-purple-500 shadow-lg rounded-md px-4 py-2 text-white hover:bg-purple-600 active:bg-purple-600 focus:outline-none focus:shadow-outline"
					onClick={handleAnnotate}
				>
					Pause and Annotate
				</button>
			</div>
			<div className="col-span-1">
				<button className="bg-purple-500 shadow-lg rounded-md px-4 py-2 text-white hover:bg-purple-600 active:bg-purple-600 focus:outline-none focus:shadow-outline">
					Open another webpage
				</button>
			</div>
			<div className="col-span-1">
				<button className="bg-purple-500 shadow-lg rounded-md px-4 py-2 text-white hover:bg-purple-600 active:bg-purple-600 focus:outline-none focus:shadow-outline">
					Save without processing
				</button>
			</div>
		</div>
	);
}

function AddHeader() {
	const el = document.createElement('h1');
	el.innerText = 'Adding header from react!!!!';
	document.getElementById('body')?.appendChild(el);
	return <></>;
}

function App() {
	const handleStartRecording = () => {};

	return (
		<div className="App">
			{/* <AddHeader /> */}
			<RecordingControl />
		</div>
	);
}

export default App;
