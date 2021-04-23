import React from 'react'
import {NewsTitle, NewsDate, NewsContainer} from './UpcomingEventsStyles';

const UpcomingEvents = () => {
	return (
		<NewsContainer>
			<NewsTitle>
				<h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse mollitia porro veritatis laudantium dolores.</h3>
			</NewsTitle>
			<NewsDate>
				<p>April 27, 2021</p> 
			</NewsDate>
		</NewsContainer>
	)
}

export default UpcomingEvents;
