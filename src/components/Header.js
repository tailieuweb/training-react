// Header trang web
import React from 'react'
import CurrentTimeNew from './CurrentTimeNew'
import '../scss/Style.scss'

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<a href="/">Weather App</a>
				<CurrentTimeNew />
			</header>
		</React.Fragment>
	);
}

export default Header;