import React from 'react'
import {NewsTitle, NewsDate, NewsContainer} from './UpcomingEventsStyles';


const UpcomingEvents = ({title,date}) => {
	return (
		<NewsContainer>
			<NewsTitle>
				<h3>
					{title}
				</h3>
			</NewsTitle>
			<NewsDate>
				<p>{date}</p> 
			</NewsDate>
		</NewsContainer>
	)
}

export default UpcomingEvents;
