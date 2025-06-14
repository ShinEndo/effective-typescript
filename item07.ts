interface Lockbox {
	code :number;
}

interface ReadonlyLockbox {
	readonly code: number;
}

const box: Lockbox = {code: 1234};
const robox: ReadonlyLockbox = {code: 5678};
box.code = 4321;
// robox.code = 8765;