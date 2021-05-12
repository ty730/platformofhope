import styled from 'styled-components';
import aboutImage from '../../images/about/about-home.png';

export const AboutImage = styled.div`

height: 500px;
width: 100%;
background-image: url(${aboutImage});
background-position:center;
background-size:cover;
	display: grid;
	place-items: center;
`

export const AboutHero = styled.div`
text-align: center;

h1 
{
	font-size: 64px;
	line-height: 88px;
	color: white;
	font-family: 'Scheherazade', serif;
	font-weight: 400;
}
p 
{
	width:60ch;
	line-height: 33px;
	color: white;
	font-size: 21px;
`

export const AboutStory = styled.div`

height: auto;
width: 100%;

.row
{
	padding: 1rem;
}
.container
{
	padding: 3rem;
	height: auto;
	margin: 2rem auto;
}
.about-logo
{
	width: 148px;
	display:flex;
	justify-content: flex-end;
	height: auto;
}
.about-header h1
{
	font-size: 72px;
	font-weight: 400;
	width: 148px;
	text-align: right;
	line-height: 55px;
	font-family: 'Scheherazade', serif;
	font-weight: 700;
	color:#009A7B;
	padding-top: 1rem;
}

.about-right
{
	padding:0;
	height: auto;
	position: relative;
	p 
	{
		line-height: 33px;
		color: #161616;
	
	}
	span 
	{
		border-left: 3px solid #009A7B;
		padding-left: 1rem;
		color: #009A7B;
		position: absolute;
		bottom: 1.3rem;
		left: 0;
	}
}
`