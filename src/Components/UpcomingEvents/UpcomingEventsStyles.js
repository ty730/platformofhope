import styled from 'styled-components';


export const NewsContainer = styled.div`
max-width: 320px;
padding: 1rem;

height: 100px;
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
	color: black;
}
`

export const NewsDate = styled.div`

p
{
	font-size: 1rem;
}
`;
