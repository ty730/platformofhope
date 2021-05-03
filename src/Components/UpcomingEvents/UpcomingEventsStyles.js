import styled from 'styled-components';


export const NewsContainer = styled.div`
width: 320px;
padding: 1rem;

height: 100px;
@media screen and (max-width: 700px)
	{
		width: 100%;
		padding: 1rem;
	}
`

export const NewsTitle = styled.div`
h3 
{
	font-size: 1.2rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	max-width:350px; // some width
	font-weight: 400;
	color: #424242;

}

@media screen and (max-width: 800px)
{
	h3 
	{
		max-width: 420px;
		white-space: pre-wrap;
	}
}
`

export const NewsDate = styled.div`

p
{
	font-size: 1rem;
}
`;
