import React from 'react';
import '../App.css';
import '../styles/international.css'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-bootstrap';
import flyer from '../images/event-flyers/kisumu-flyer.jpg';
import soccer from '../images/international/kenya-grouphome-soccer.jpg';
import classroom from '../images/international/kenya-grouphome-1.jpg';
import linktree from './../images/icons/linktree-icon.png';
import amazon from './../images/icons/amazon-icon.png'

function International() {
  return (
    <div className="international">
      <Helmet>
        <title>International - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="international-header">
        <h2>Platform of Hope International</h2>
        <p>
            Building Faith, Connection, and Hope Across Borders
        </p>
        <hr/>
      </div>
      <Row className='international-content-container'>
        <Col className='international-column'>
          <h2>International Faith Circles Kisumu, Kenya</h2>
          <img src={flyer} alt="Kisumu Flyer" />
          <p>Platform of Hope International is expanding its mission to Kisumu, Kenya — creating a vibrant space for connection, growth, and spiritual insight across cultures.</p>
          <p>The International Faith Circle of Kisumu brings together leaders, families, and communities for non-denominational Bible-based conversations that make faith practical and alive in daily life. These gatherings inspire hope, strengthen local communities, and build global relationships rooted in shared faith and compassion.</p>
          <p>Led by Rev. Doris M. Smith, M.Div. , and Rev. Mark Onginjo, M.Div. the initiative bridges hearts and minds across borders — empowering participants to live out faith through service, dialogue, and global understanding.</p>
          <p>“Where faith meets life, hope grows.”</p>
        </Col>
        <Col className='international-column'>
          <h2>International Group Homes in Nairobi, Kenya</h2>
          <img src={soccer} alt="Soccer" />
          <p>Caring Beyond Borders — One Home, One Heart at a Time.</p>
          <p>Platform of Hope has adopted three group homes in Nairobi, Kenya, extending our outreach to children and youth in need of care, education, and emotional support.</p>
          <p>Through our “Hope in Action” effort, we send quarterly shipments of essential and uplifting items — including coloring books, soccer balls, school supplies, and toiletries — to nurture creativity, joy, and dignity among the children we serve.</p>
          <p>You can be part of this mission by donating directly through our Amazon Wish List or Linktree to ensure every contribution makes an immediate difference.</p>
          <div className="donate-links">
            <a href="https://a.co/h3gtXv3" target="_blank" rel="noopener noreferrer" className="my-2">
              <h3>Amazon Wish List</h3>
              <img className='amazon-logo' src={amazon} alt="Amazon Wish List"/>
            </a>
          </div>
          <div className='buy-buttons'>
            <a href="https://linktr.ee/platformofhopeinc" target="_blank" rel="noopener noreferrer" className="my-2">
                <button className='linktree'>
                    <img src={linktree} alt=""/>
                    <p className="ml-1">Linktree</p>
                </button>
            </a>
          </div>
          <img src={classroom} alt="Classroom" />
        </Col>
      </Row>
    </div>
  );
}

export default International;
