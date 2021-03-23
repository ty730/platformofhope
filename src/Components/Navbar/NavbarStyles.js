import styled from 'styled-components'


export const Container = styled.div`
	width: 1440px;
	margin: 0 auto;
	height: auto;
	display:flex;
	align-items: center;
	padding: 1rem 0;
`

export const LogoContainer = styled.div`
	width: 500px;
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
	a:hover{
		text-decoration:none;
	}
	h4
	{
		padding: 0;
		margin: 0;
		font-size: 1.2rem;
		font-weight: 600;
		color: #009A7B;
		line-height: 28px;
	}
	p 
	{
		padding: 0;
		margin: 0;
		font-size:1rem;
	}
`