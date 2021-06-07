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
	font-size:1.7rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	max-width:350px; // some width
	color: #424242;
	line-height: 33px;
	font-weight: 700;
	margin-bottom: 0;

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
