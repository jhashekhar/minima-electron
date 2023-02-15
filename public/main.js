const {
	app,
	BrowserWindow,
	Tray,
	desktopCapturer,
	BrowserView,
} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
// const appIcon = new Tray(`file://${path.join(__dirname, '/icon128.png')}`);

function AddHeader() {
	const el = document.createElement('h1');
	el.innerText = 'Adding header from react!!!!';
	document.getElementById('body')?.appendChild(el);
}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
		icon: path.join(__dirname, '/icon128.ico'),
	});

	const view = new BrowserView();
	win.setBrowserView(view);
	view.setBounds({ x: 0, y: 24, width: 1200, height: 860 });
	view.webContents.loadURL('https://getminima.com');

	// win.loadFile('index.html');
	desktopCapturer
		.getSources({ types: ['window', 'screen'] })
		.then(async (sources) => {
			for (const source of sources) {
				console.log('SOURCE: ', source);
				if (source.name === 'Terminal') {
					console.log('SOURCE NAME IS MINIMA');
					win.webContents.send('SET_SOURCE', source.id);
					console.log('THIS CODE WORKS?????');
					return;
				}
			}
		});

	win.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../public/index.html')}`
	);

	win.webContents.on('did-finish-load', (event) => {
		// let code = `const el = document.createElement("h1");el.innerText = "Working from main!!";document.getElementById("body").appendChild(el)`;
		// win.webContents.executeJavaScript(code);
		// const el = document.createElement('h1');
		// el.innerText = 'Adding header from react!!!!';
		// win.webContents.getElementById('body').appendChild(el);
		// console.log('CURRENT URL: ', currentURL);

		win.webContents.executeJavaScript(
			`console.log(document.getElementById('body'))`
		);
	});
};

app.whenReady().then(() => {
	createWindow();
});

console.log('DIR NAME: ', __dirname);
