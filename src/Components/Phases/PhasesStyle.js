import styled from 'styled-components'


export const PhasesContainer = styled.div`
max-width: 1440px;
margin: 5rem auto;

.home-phase-1
{
	@media screen and (max-width: 900px)
	{
		margin: 2rem 0;
	}
}
h3 
{
	line-height:52px;
	font-size: 42px;
	color: black;		font-family: 'Scheherazade', serif;
	
}
.home-phases-header 
{
	margin-bottom: 5rem;
	text-align:center;
	/* h2 
	{
		font-size: 72px;
		color:black;
		line-height: 72px;
		font-family: 'Scheherazade', serif;
	} */
	p 
	{
		line-height: 33px;
	}
}
img 
{
	width: 100%;
	height: auto;
	position:relative;
}
svg 
{
	font-size: 2rem;
}
.phase-title
{
	position: absolute;
	bottom: 0;
	right: 2rem;
	color:white;
	width:234px;
	line-height:33px;
	text-align:right;
	font-weight: 400;
	font-size: 1.3rem;
	@media screen and (max-width: 900px)
	{
		padding-bottom: 2rem;
	}
}
.arrow 
{
	text-align:center;
	padding:0;
	margin:0;
	vertical-align:center;
	margin-top: 5rem;
	@media screen and (max-width: 900px)
	{
		display:none;
	}
}
@media screen and (max-width: 900px)
	{
		padding: 2rem;
		.col-lg-3
		{
			margin: 1rem 0;
		}
	}
`