import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: auto;
	background: #FFFFFF;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export const NavContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	height: auto;
	display:flex;
	align-items: center;
	padding: 1rem;
	justify-content: space-between;

`

export const LogoContainer = styled.div`
	width: auto;
	height: auto;
	display:flex;
	align-items: center;
	justify-content: flex-start;
`

export const ImageContainer = styled.div`
	img
	{
		width: 45px;
		height: 45px;
		margin-right: .80rem;
	}
`

export const LogoName = styled.div`
	text-align:left;
	height:auto;
	padding-top: .5rem;
	a:hover{
		text-decoration:none;
	
	}
	h4
	{
		padding: 0;
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: #009A7B;
		line-height:18px;
	}
	p 
	{
		padding: 0;
		margin: 0;
		font-size:1rem;
	}
`

export const NavLinks = styled.ul`
	width:auto;
	display: flex;
	align-items: center;
	height: auto;
	padding: 0;
	margin: 0;
	@media screen and (max-width: 1200px)
	{
		display: none;
	}
`

export const NavLink = styled.li`
	padding: .5rem;
	font-weight: 300;
	font-size: 1rem;
	a
	{
		color: #000000;
		padding: 0 .4rem;
	}
	a:hover
	{
		text-decoration: none;
	}
`

export const NavButton = styled.button`
	border:none;
	border-style:none;
	width: 120px;
	height: 40px;
	padding: 0;
	margin: 0;
	margin-left: 1rem;
	font-size: 1rem;
	color: #fffffe;
	font-weight: 500;
	letter-spacing: 1.2px;
	background-color: #F99F00;
	&:hover 
	{
		background-color: #009A7B;
	}
`

// Mobile Nav
export const MobileIcon= styled.div`

	display: none;
	@media screen and (max-width: 1200px)
	{
		display: block;
	}
	svg 
	{
		font-size: 1.2rem;
	}
`