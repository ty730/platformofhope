import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import { Col as Column } from 'react-bootstrap';
import { Section } from './HomeColumnStyles';
import {Link} from "react-router-dom";

const HomeColumn = ({paragraph, image,title, alt, link}) => {
	return (
		<>
				<Column xl={4} lg={4} md={12} sm={12} className="mx-auto">
					<Section>
					<Link to={link}><div className="home-section-container">
						<img src={image} alt={alt}/>
								<h1>{title}</h1>
							
								<p>{paragraph}</p>
								<BsArrowRight className="arrow"/>
						</div></Link>
					</Section>
				</Column>
		</>
	)

	
}

export default HomeColumn

