import React from 'react'
import {NewsTitle, NewsDate, NewsContainer} from './UpcomingEventsStyles';


const UpcomingEvents = (props) => {
	return (
		<NewsContainer>
			<NewsTitle>
				<h3>
					{ props.title }
				</h3>
			</NewsTitle>
			<NewsDate>
				<p>{props.date}</p> 
			</NewsDate>
		</NewsContainer>
	)
}

export default UpcomingEvents;
