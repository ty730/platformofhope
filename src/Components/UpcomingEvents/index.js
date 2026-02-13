import React from "react";
import { NewsTitle, NewsDate, NewsContainer } from "./UpcomingEventsStyles";

const UpcomingEvents = ({ title, startDate, endDate }) => {
    function formatDate(startDate, endDate) {
        if (endDate.getHours() === 0) {
            return startDate.toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
        } else {
            return (
                startDate.toLocaleString([], {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                }) +
                " - " +
                endDate.toLocaleString([], { hour: "numeric" })
            );
        }
    }

    return (
        <NewsContainer>
            <NewsTitle>
                <h3>{title}</h3>
            </NewsTitle>
            <NewsDate>
                <p>{formatDate(startDate, endDate)}</p>
            </NewsDate>
        </NewsContainer>
    );
};

export default UpcomingEvents;
