interface Room {
	numDoors: number;
	ceilingHeightft: number;
}

const r: Room = {
	numDoors: 1,
	ceilingHeightft: 10,
	// elephant: 'present',
}

interface Options {
	title: string;
	darkMode?: boolean;
}

function createWindow(options: Options) {
	if(options.darkMode) {
		// setDarkMode();
	}
}
createWindow({
	title: 'Spider Solitaire',
	darkMode: true,
});

const o1:Options = document;
const o2:Options = new HTMLAnchorElement();