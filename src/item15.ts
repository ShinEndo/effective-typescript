interface State {
	userId: string;
	pageTitle: string;
	recentFiles: string[];
	pageContents: string;
}
type TopNavState = {
	[K in 'userId' | 'pageTitle' | 'recentFiles'] : State[K]
}
type TopNavState02 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;