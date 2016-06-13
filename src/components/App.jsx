import React from 'react';
import NavLink, {NavIndexLink} from '../common/NavLink.jsx';

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<NavIndexLink to='/' >Home</NavIndexLink>
				<span> | </span>
				<NavLink to='/about'>About</NavLink>
				{this.props.children}
			</div>
		);
	}
}

export default App;