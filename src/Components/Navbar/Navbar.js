import React from 'react'
import logo from './../../images/pohLogo-2.png'
import {Link} from 'react-router-dom'
import {
 	Container, LogoContainer, ImageContainer,LogoName
} from './NavbarStyles';
// import { FaBars } from 'react-icons/fa';

const NavBar = ({ handleClick}) => {
    return (
        <>
            <Container>
		
					<LogoContainer>
					
						<ImageContainer>
							<Link>
								<img src={logo}/>
							</Link>
						</ImageContainer>
						<LogoName>
							<Link>
								<h4>PLATFORM OF HOPE</h4>
								<p>One Family at A time</p>
							</Link>
						</LogoName>
					
					
					</LogoContainer>
				
            </Container>
        </>
    )
}

export default NavBar
