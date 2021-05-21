import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {PhasesContainer} from './PhasesStyle';
import {FaArrowRight} from 'react-icons/fa'
import phase1 from './../../images/phases/phase1.png'
import phase2 from './../../images/phases/phase2.png'
import phase3 from './../../images/phases/phase3.png'
const Phases = () => {
	return (
	
			<PhasesContainer>
					<Container fluid>
			<div className="home-phases-header">
					<h2>The Difference</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore veritatis cum autem exercitationem adipisci?</p>
			</div>
			<div className="home-phases-box">
				<Row className="d-flex justify-content-center align-items-center p-3 my-4">
					<Col lg="3">
						<h3>Phase 1</h3>
						<div className="home-phase-1">
						<img src={phase1} alt="" />
							<h4 className="phase-title">Food Pantry and Clothes Closet</h4>
						</div>
					</Col>
					<Col lg="1" className="arrow">
						<FaArrowRight/>
						</Col>
					<Col lg="3">
					<h3>Phase 2</h3>
						<div className="home-phase-1">
						<img src={phase2} alt="" />
						<h4 className="phase-title">Food Pantry and Clothes Closet</h4>
						</div>
					</Col>
					<Col lg="1" className="arrow">		<FaArrowRight/>
					</Col>
					<Col lg="3">
					<h3>Phase 3</h3>
						<div className="home-phase-1">
						<img src={phase3} alt="" />
						<h4 className="phase-title">Food Pantry and Clothes Closet</h4>
						</div>
					</Col>
				</Row>
			</div>
			</Container>
			</PhasesContainer>

	)
}

export default Phases
