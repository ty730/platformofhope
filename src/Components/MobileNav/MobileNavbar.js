import React from 'react'
import {
	MobileNavbarContainer,
	Icon,
	CloseIcon,
	NavWrapper,
	NavLinks,
	NavLink,
	NavBtnWrapper,
	ButtonLink
} from './MobileNavbarStyle';
const MobileNavbar = ({isOpen, handleClick}) => {
	return (
		<MobileNavbarContainer isOpen = {isOpen} handleClick={handleClick} onClick={handleClick}>
			<Icon>
				<CloseIcon />
			</Icon>
			<NavWrapper>
				<NavLinks>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/newsandevents">News & Events</NavLink>
					<NavLink to="/donate">Donate</NavLink>
				</NavLinks>

				<NavBtnWrapper>
					<ButtonLink to="/">GET HELP</ButtonLink>
					<ButtonLink to="/donate">DONATE</ButtonLink>
				</NavBtnWrapper>
			</NavWrapper>
	
		</MobileNavbarContainer>

	)
}

export default MobileNavbar
