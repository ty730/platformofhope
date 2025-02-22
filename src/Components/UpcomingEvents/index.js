import React from 'react'
import {NewsTitle, NewsDate, NewsContainer} from './UpcomingEventsStyles';


const UpcomingEvents = ({title,date}) => {
	function formatDate(date) {
		if (date.getHours() == 0) {
			return date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric'});
		} else {
			return date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
		}
	}

	return (
		<NewsContainer>
			<NewsTitle>
				<h3>
					{title}
				</h3>
			</NewsTitle>
			<NewsDate>
				<p>{formatDate(date)}</p> 
			</NewsDate>
		</NewsContainer>
	)
}

export default UpcomingEvents;
